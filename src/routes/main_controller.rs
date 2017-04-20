use std::collections::HashMap;
use iron::status;
use iron::prelude::*;
use iron::headers::ContentType;
use urlencoded::UrlEncodedQuery;
use serde_json::to_string_pretty;

#[derive(Debug)]
pub struct MainController {}

impl MainController {
    pub fn index(req: &mut Request) -> IronResult<Response> {
        let queries = req.get::<UrlEncodedQuery>().unwrap_or((HashMap::new()));
        let response = to_string_pretty(&queries).unwrap_or("".to_string());
        Ok(Response::with((ContentType::json().0, status::Ok, response)))
    }
}
