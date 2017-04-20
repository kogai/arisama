extern crate dotenv;
extern crate iron;
extern crate mount;
extern crate router;
extern crate iron_sessionstorage;
extern crate urlencoded;

use dotenv::dotenv;
use std::env;
// use std::io::Read;

use iron::status;
use iron::prelude::{Iron, Chain, Request, Response, IronResult};
use iron::headers::ContentType;
use router::Router;
// use mount::Mount;
// use urlencoded::UrlEncodedQuery;
// use iron_sessionstorage::traits::*;
use iron_sessionstorage::SessionStorage;
use iron_sessionstorage::backends::SignedCookieBackend;

fn get_env(kind: &str) -> String {
    env::var(kind).expect(&format!("Missing environment parameter {}", kind))
}

fn handler(_: &mut Request) -> IronResult<Response> {
    Ok(Response::with((ContentType::json().0, status::Ok, "{}")))
}

fn main() {
    dotenv().ok();
    let port = get_env("PORT");
    let cookie_secret = get_env("COOKIE_SECRET");
    let mut router = Router::new();
    router.get("/", handler, "index");

    let mut chain = Chain::new(router);
    let session = SessionStorage::new(SignedCookieBackend::new(cookie_secret.into_bytes()));
    chain.link_around(session);

    let server = Iron::new(chain).http(format!("0.0.0.0:{}", port));
    match server {
        Ok(listen) => println!("Server starting -> {:?}", listen),
        Err(err) => println!("Server failed start because {}...", err),
    }
}

