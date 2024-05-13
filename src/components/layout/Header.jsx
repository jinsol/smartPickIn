import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";
import Nav from "@/components/layout/Nav";
import { useSelector, useDispatch } from "react-redux";
import { initServiceMenu } from "@/store/service";
import { initNewsMenu } from "@/store/news";
import { userLogout, fetchMembers, localUser } from "@/store/member";
import { CiLock, CiUnlock } from "react-icons/ci";
import { PiUserPlusLight } from "react-icons/pi";

const HeaderBlock = styled.header`
  text-align: center;
  position: fixed;
  display: flex;
  height: 100px;
  width: 100%;
  z-index: 99999;

  .member {
    position: absolute;
    top: 30px;
    left: 30px;
    a {
      margin-right: 10px;
    }
  }
  .itemcount {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 30px;
    color: navy;
    span {
      position: absolute;
      top: -2px;
      right: -5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: hotpink;
      color: #fff;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      font-weight: bold;
    }
  }
  .openNav {
    position: absolute;
    top: 20px;
    right: 80px;
    font-size: 30px;
    color: blue;
    cursor: pointer;
    display: none;
  }
  #header__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    align-items: center;
    position: relative;
    padding: 0px 1%;
    background: rgba(255, 255, 255, 0.5); /* 반투명한 배경색 */

    .logo {
      width: 100px;
      max-height: 150px;
      img {
        width: 100%;
        height: auto;
      }
      position: relative;
      z-index: 9999999;
    }
    .mainDepth1 {
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        display: none;
      }

      li {
        font-size: 1.2em;
        a {
          /* 추가 제안드립니다! */
          display: block;
          cursor: pointer;
          /* 추가 제안드립니다! */
          padding: 40px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          &:hover,
          &.active {
            color: var(--blue);
          }
        }
      }
      .depthNews2,
      .depthService2 {
        width: 100%;
        background: #1774d0;
        position: absolute;
        top: 100%;
        left: 0;
        transition: all 0.5s ease;
        display: none;
        justify-content: center;
        /* padding: 20px 40px; !제거 제안드립니다! */
        a {
          font-size: 0.9em;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.5s ease;
          &:hover {
            color: var(--white);
            font-weight: 500;
          }
        }
      }
      .depthNews1:hover {
        .depthNews2 {
          display: flex;
          justify-content: center;
        }
      }
      .depthService1:hover {
        .depthService2 {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  .info {
    position: relative;
    z-index: 9999;
    display: flex;
    align-items: center;
    .infotext {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      padding-top: 5px;

      a {
        display: inline-block;
        font-size: 2em;
        padding-left: 15px;
      }
    }
  }
  .menu-wrap {
    position: relative;
    width: 28px;
    height: 16px;
    cursor: pointer;
    z-index: 9999999;
  }
  .menu-wrap .line {
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #222;
    left: 0;
  }
  .menu-wrap .line:first-child {
    top: 0;
    transform-origin: 25% 50%;
    transition: 0.3s;
  }
  .menu-wrap .line:nth-child(2) {
    top: calc(50% - 1px);
  }
  .menu-wrap .line:last-child {
    bottom: 0;
    transform-origin: 25% 50%;
    transition: 0.3s;
  }

  .menu-wrap.open .line:first-child {
    transform: rotate(45deg) translateX(10%);
  }
  .menu-wrap.open .line:nth-child(2) {
    opacity: 0;
  }
  .menu-wrap.open .line:last-child {
    transform: rotate(-45deg) translateX(10%);
  }
`;

const Header = ({ onMouseEnter, onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [loging, setLoging] = useState(localStorage.loging);

  const user = useSelector((state) => state.members.user);
  console.log(user);

  useEffect(() => {
    dispatch(fetchMembers());
    if (loging) {
      // console.log("로깅",loging)
      dispatch(localUser(JSON.parse(loging)));
      setLoging(localStorage.loging);
    }
  }, [dispatch, loging]);

  // const handleLogout = (e)=>{
  //   e.preventDefault()
  //   dispatch(userLogout())
  // }

  // useEffect(()=>{
  //   dispatch(fetchProducts())
  //   let loging = localStorage.loging
  //   if (loging) {
  //     dispatch(userLogin(JSON.parse(loging)))
  //   }
  // }, [dispatch])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    setLoging(null);
    navigate("/");
    // localStorage.removeItem('loggedInUser');
  };

  /* ================== 24.05.10 고객센터 - depth2 구현을 위해 삽입 (진솔) ================== */
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    dispatch(initServiceMenu(hash));
  }, [dispatch]);

  const handleMenuClick = (value) => {
    navigate(`/service/#${value}`);
    dispatch(initServiceMenu(value));
  };
  const newsMenuClick = (value) => {
    navigate(`/news/#${value}`);
    dispatch(initNewsMenu(value));
  };

  /* ================== 24.05.10 고객센터 - depth2 구현을 위해 삽입 (진솔) ================== */

  return (
    <HeaderBlock onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <nav id="header__nav">
        <h1 className="logo">
          <Link to="/">
            <img src="./assets/image/logo_blue.png" alt="" />
          </Link>
        </h1>
        <ul className={cn("mainDepth1", isOpen && "open")}>
          <li>
            <NavLink to="/about">소개</NavLink>
          </li>
          <li>
            <NavLink to="/product">서비스주문</NavLink>
          </li>
          <li className="depthNews1">
            <a
              onClick={() => newsMenuClick("소식")}
              className={location.pathname.includes("/news") && "active"}
            >
              소식
            </a>
            <ul className="depthNews2">
              <li>
                <a onClick={() => newsMenuClick("소식")}>소식</a>
              </li>
              <li>
                <a onClick={() => newsMenuClick("기업소식")}>기업소식</a>
              </li>
            </ul>
          </li>
          <li className="depthService1">
            <a
              onClick={() => handleMenuClick("공지사항")}
              className={location.pathname.includes("/service") && "active"}
            >
              고객센터
            </a>
            <ul className="depthService2">
              <li>
                <a onClick={() => handleMenuClick("공지사항")}>공지사항</a>
              </li>
              <li>
                <a onClick={() => handleMenuClick("자주묻는질문")}>
                  자주묻는질문
                </a>
              </li>
              <li>
                <a onClick={() => handleMenuClick("취소·환불규정")}>
                  취소·환불규정
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/ask">문의하기</NavLink>
          </li>
        </ul>
        <div className="info">
          {!loging && !user ? (
            <div className="infotext">
              <Link to="/login">
                <CiLock />
              </Link>
              <Link to="/agree">
                <PiUserPlusLight />
              </Link>
            </div>
          ) : (
            <div className="infotext">
              <a href="#" onClick={handleLogout}>
                <CiUnlock />
              </a>
              <Link to="/usermodify">수정</Link>
            </div>
          )}
          <div
            className={cn("menu-wrap", isOpen ? "open" : "")}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </HeaderBlock>
  );
};

export default Header;
