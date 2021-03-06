extern crate dotenv;
extern crate iron;
extern crate mount;
extern crate router;
extern crate iron_sessionstorage;
extern crate urlencoded;
extern crate serde_json;
extern crate iron_test;

mod utils;
mod routes;

use dotenv::dotenv;

use iron::prelude::{Iron, Chain};
use iron_sessionstorage::SessionStorage;
use iron_sessionstorage::backends::SignedCookieBackend;

use routes::Routes;
use utils::get_env;


fn main() {
    dotenv().ok();

    let port = get_env("PORT");
    let cookie_secret = get_env("COOKIE_SECRET");
    let router = Routes::new();

    let mut chain = Chain::new(router);
    let session = SessionStorage::new(SignedCookieBackend::new(cookie_secret.into_bytes()));
    chain.link_around(session);

    let server = Iron::new(chain).http(format!("0.0.0.0:{}", port));
    match server {
        Ok(listen) => println!("Server starting -> {:?}", listen.socket),
        Err(err) => println!("Server failed start because {}...", err),
    }
}

