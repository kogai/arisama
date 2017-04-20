mod main_controller;

use router::Router;
use self::main_controller::MainController;

#[derive(Debug)]
pub struct Routes {}

impl Routes {
    pub fn new() -> Router {
        let mut router = Router::new();
        router.get("/", MainController::index, "index");
        router
    }
}

