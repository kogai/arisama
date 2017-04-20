use iron::status;
use iron::prelude::{Request, Response, IronResult};
use iron::headers::ContentType;
// use serde_json::Value;

#[derive(Debug)]
pub struct MainController {}

impl MainController {
    pub fn index(_: &mut Request) -> IronResult<Response> {
        let john = json!({
            "name": "John Doe",
            "age": 43,
            "phones": [
                "+44 1234567",
                "+44 2345678"
            ]
        });
        Ok(Response::with((ContentType::json().0, status::Ok, john.to_string())))
    }
}

