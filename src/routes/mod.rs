mod main_controller;

use router::Router;

#[derive(Debug)]
pub struct Routes {}

impl Routes {
    pub fn new() -> Router {
        let mut router = Router::new();
        router.get("/", main_controller::Index, "index");
        router
    }
}

