use iron::status;
use iron::prelude::{Request, Response, IronResult};
use iron::headers::ContentType;
use router::Router;
// use serde_json::Value;

#[derive(Debug)]
struct MainController {}

impl MainController {
    fn index(_: &mut Request) -> IronResult<Response> {
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

#[derive(Debug)]
pub struct Routes {}

impl Routes {
    pub fn new() -> Router {
        let mut router = Router::new();
        router.get("/", MainController::index, "index");
        router
    }
}

