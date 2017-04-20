extern crate dotenv;
extern crate iron;
extern crate mount;
extern crate router;
extern crate iron_sessionstorage;
extern crate urlencoded;

use dotenv::dotenv;
use std::env;
use std::io::Read;

use iron::prelude::{Chain, Request, Response};
use iron::headers::ContentType;
use iron::{Url, status};
use mount::Mount;
use urlencoded::UrlEncodedQuery;

fn main() {
    println!("Hello, world!");
}

