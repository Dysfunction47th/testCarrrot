
import React from "react";
import style from "./Mainpage.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Mainpage() {
  // 1. useLocation 훅 취득
  // const location = useLocation();

  // 2. location.state 에서 파라미터 취득

  const id = sessionStorage.getItem("user_id");
  const date = sessionStorage.getItem("user_date");
  const nickname = sessionStorage.getItem("nickname");

  const id1 = localStorage.getItem("user_id");
  const date1 = localStorage.getItem("user_date");
  const nickname1 = localStorage.getItem("nickname");

  const [resUserInfo, setResUserInfo] = useState(null);

  console.log(id, id1, date, date1, nickname, nickname1);

  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            당근마켓
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>

            {/* nickname  */}
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                {nickname} 님
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      {/* <!-- Section--> */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th?id=OIP.mVJIvboifoaXP08_rZK__AHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">상자</h5>
                    {/* <!-- Product price--> */}
                    4000원 ~ 8000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> */}
                {/* <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> */}
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.WNL89qnHEE26wCO8QPF4kwHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">자전거</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      200,000원
                    </span>
                    180,000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> style="top: 0.5rem; right: 0.5rem"*/}
                <div class="badge bg-dark text-white position-absolute">
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.tcDC88MOAVfMup9qzrOfGQHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">기타</h5>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      50000원
                    </span>
                    25000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://ccimg.hellomarket.com/images/2019/item/04/22/12/0913_4022360_2.jpg?size=s6"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">휴대폰</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    400,000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> style="top: 0.5rem; right: 0.5rem"*/}
                <div class="badge bg-dark text-white position-absolute">
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.HdlVQMbgZ4KzP307AFx1EQHaM6?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">제습기</h5>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      $500,000원
                    </span>
                    $250,000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.MD4MBscnzvxXbSBrHp_Z0wHaFj?w=266&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">운동화</h5>
                    {/* <!-- Product price--> */}
                    120.000원 ~ 280.000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Sale badge--> style="top: 0.5rem; right: 0.5rem"*/}
                <div class="badge bg-dark text-white position-absolute">
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.o1ELMsfHMawH7envCnEVKgHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">샤넬가방</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span class="text-muted text-decoration-line-through">
                      200.000원
                    </span>
                    180.000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}
                <img
                  class="card-img-top"
                  src="https://th.bing.com/th/id/OIP.bOBkR4VUcgK7tg9AWeB-vwHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">에어팟</h5>
                    {/* <!-- Product reviews--> */}
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    100,000원
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      상품 담기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainpage;