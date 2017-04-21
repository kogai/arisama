use std::collections::HashMap;
use iron::{status, Handler};
use iron::prelude::*;
use iron::headers::ContentType;
use urlencoded::UrlEncodedQuery;
use serde_json::to_string;

#[derive(Debug)]
pub struct Index;

impl Handler for Index {
    fn handle(&self, req: &mut Request) -> IronResult<Response> {
        let queries = req.get::<UrlEncodedQuery>().unwrap_or((HashMap::new()));
        let response = to_string(&queries).unwrap_or("".to_string());
        Ok(Response::with((ContentType::json().0, status::Ok, response)))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use iron::Headers;
    use iron_test::{request, response};

    #[test]
    fn it_should_echo_query() {
        let response = request::get("http://0.0.0.0:3000?foo=bar", Headers::new(), &Index).unwrap();
        let result_body = response::extract_body_to_string(response);

        assert_eq!(result_body, r#"{"foo":["bar"]}"#);
    }
}

