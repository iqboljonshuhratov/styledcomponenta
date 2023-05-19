import styled from "styled-components";


const Instructor = styled.div`
margin-top: 100px;
width: 100%;
height: 600px;
justify-content: space-between;
padding: 0 200px;
.left{
    .top{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .bottom{
        display: flex;
        gap: 20px;
    }

}

.right{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 100px 200px 0px;

    img{
        border-radius: 100%;
        width: 360px;
    }
}

`;

export default Instructor

