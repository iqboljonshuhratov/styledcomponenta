import styled from "styled-components";


const HeaderBox = styled.header`
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 10px;

    .top{

        padding: 100px;

        width: 100%;
        height: 600px;
        display: flex;
        justify-content: space-between;

        .left{

        }
        .right{
            .content{
                width: 416px;
                height: 425px;
                background-color: #000b22a8;
                padding: 24px 40px;
                display: flex;
                flex-direction: column;
                gap: 5px;
                border-radius: 15px;

                a{
                    color: white;
                    text-decoration: none;
                }
                p{
                    color: #69707d;
                }

                .buttonBox{
                    display: flex;
                    justify-content: space-between;
                    

                    button{
                        padding: 8px 10px;
                        background-color: #00226b;
                        color: white;
                        border-radius: 20px;
                        border: none;
                        
                    }


                }

                .inputBox{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                     input{
                        width: 100%;
                        height: 35px;
                        padding: 0px 10px;
                        border-radius: 10px;
                        background-color: #00226b;
                        color: white;
                        border: none;
                     }
                     button{
                        border-radius: 15px;
                        background-color: #754ffe;
                        color: white;
                     }
                }

               
            }
        }

    }

`;

export default HeaderBox