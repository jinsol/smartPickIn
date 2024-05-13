import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward,IoIosArrowRoundBack   } from "react-icons/io";
import {useNavigate,Link } from 'react-router-dom';
import newsdata from '@/assets/data/newsdata'
import newscompanydata from '@/assets/data/newscompanydata'
import cn from "classnames";




const NewsDetailSectionBlock = styled.div`

.detail__wrap{
   max-width: 1500px;
   margin:150px  auto 20px;
   padding: 30px;
   transform: translateY(200px);
                        opacity: 0;
                        transition: all 0.8s ease;

                        &.on{
                        transform: translateY(0);
                        opacity: 1;
                        }

    .headerText{
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        background: ${(props) => (props.type === '기업소식' ? 'var(--yellow)' : 'var(--blue)')};
        padding: 20px;
        border-radius: 20px;
        color: var(--white);
        margin:auto;
        margin-bottom: 30px;
        font-size: 1em;
        @media (max-width:768px){
            font-size:0.8em;
        }
        
    }
    p{
        font-size: 1.2em;
        padding: 10px;
        line-height: 1.8em;
        letter-spacing: 0.1em;
        white-space: pre-line;
        margin-bottom: 30px;
        @media (max-width:768px){
            font-size:1em;
        }
        strong{
            color: var(--black);
            background: var(--yellow);
            font-size: 2em;
            padding: 5px;
        }
    }
    .btn{
        display: flex;
        justify-content: space-between;
        margin: 20px auto;
        padding: 0 10px;
        font-size: 1.5em;
        @media (max-width:768px){
            font-size:1.2em;
        }
        .button02{
        background: ${(props) => (props.type === '기업소식' ? 'var(--yellow)' : 'var(--blue)')};
            border-radius: 50px;
            color: var(--white);
            transition: all 0.5s ease;
            button{
            padding: 10px 40px;
            }
            &:hover{
        background: ${(props) => (props.type === '기업소식' ? 'var(--yellow-hover)' : 'var(--blue-hover)')};
                
            }
        }
        .button01, .button03{
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover{
                color: ${(props) => (props.type === '기업소식' ? 'var(--yellow-hover)' : 'var(--blue-hover)')};
               
                em:nth-child(1){
                    transform: translateX(-5px);
                }
                em:nth-child(2){
                    transform: translateX(5px);
                    
                }
            }
            em{
                padding: 2px;
                margin: 0 2px;
                transition: all 0.3s ease;

            }
        }
    }
}
`

const NewsDetailSection = ({item,type}) => {
const navigate = useNavigate()
const prevId = item.id-1
const nextId = item.id+1
const [prevData, setPrevData] = useState(null)
const [nextData, setNextData] = useState(null)


const goToPreviousPage = ()=>{
    if(type=='소식'){
        navigate('/news#소식')
    } else{
        navigate('/news#기업소식')

    }
}
const [listAni, setListAni] = useState(false)

useEffect(()=>{
    setListAni(true)
},[])


useEffect(()=>{
    if(type=='소식'){
        setPrevData(newsdata.find((item,index)=>item.id == prevId))
        setNextData(newsdata.find((item,index)=>item.id == nextId))
    } else{
        setPrevData(newscompanydata.find((item,index)=>item.id == prevId))
        setNextData(newscompanydata.find((item,index)=>item.id == nextId))
    }
},[item, type])

    


    return (
        <NewsDetailSectionBlock type={type}>
            <div className={cn("detail__wrap", listAni && 'on')}>
                <div className='headerText'>
          <h2>{item.maintext}</h2>
          <span>{item.date}</span>
          </div>
          <p dangerouslySetInnerHTML={{__html: item.detail}}></p>
          <div className="btn">
          {prevId > 0 ?   
            <div className="button01">
              <em><IoIosArrowRoundBack className='arrow' /></em>
              <Link to={`/newsDetail/${prevId}`} state={{ item: prevData, type:type}}>이전 게시글</Link>
            </div>
            :<div></div>
          }
            <div className="button02">
            <button type='button' onClick={goToPreviousPage}>목록</button>
            </div>
            {nextId < 11 ?
            <div className="button03">
            <Link to={`/newsDetail/${nextId}`} state={{item:nextData, type:type}}>다음 게시글</Link>
            <em><IoIosArrowRoundForward className='arrow' /></em>
            </div>
            :<div></div>
            }
          </div>
          </div>
         
        </NewsDetailSectionBlock>
    );
};

export default NewsDetailSection;