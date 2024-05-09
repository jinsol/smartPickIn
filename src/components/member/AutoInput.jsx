import React, { Component } from "react";
import styled from "styled-components";
import cn from 'classnames'
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheck } from "react-icons/fa";

const AutoinputBlock = styled.div`
button{
    border: 1px solid var(--blue);
    padding: 10px;
    color: var(--blue);
    transition: all 0.3s ease;
    &:hover, &.on{
        background: var(--blue);
        color: var(--white);
    }
}
   #reload_href {
       color: var(--blue) !important;
       &::after{
        content: ' (새로고침)';
        color: var(--gray01);
       }
    }
    #user_captcha_input{
                border: 1px solid var(--gray06);
                text-indent:1em; 
                padding: 15px;
                margin-top: 2px;
                transition: border 0.3s ease;
                &:focus{
                    outline: none;
                    border:1px solid var(--blue);
                }
                
                &:hover{
                    border:1px solid var(--blue);
                }
    }

`

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";

class CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      alert("완료되었습니다.");
      this.props.changeAuto(true)
      loadCaptchaEnginge(6);

    } else {
      alert("입력문구를 정확히 입력해주세요.");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <AutoinputBlock>
        <div className="container">
          <div className="form-group">
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>

            <div className="col mt-3">
              <div>
                <input
                  placeholder="대소문자 구분해서 입력해주세요."
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="col mt-3">
              <div>
                <button type="button"
                  className={cn('btn', 'btn-primary',  this.props.checking ?  'on' : '' )}
                  onClick={() => this.doSubmit()}
                >
                 <FaCheck />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AutoinputBlock>
    );
  }
}

export default CaptchaTest;
