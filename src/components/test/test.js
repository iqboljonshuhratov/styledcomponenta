import styled from "styled-components";


const TestBox = styled.div`
    background-color: #02235ffd;
    width: 100%;
    .text-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-top: 100px;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }


    .row{
        gap: 50px;
        justify-content: center;
        margin-bottom: 100px;
        .col-sm-9{
            background-color: #243a62fd;
            text-align: center;
            margin-bottom: 20px;
            
            
        }
        #coll{
            padding: 30px 0 0 0 !important;

            .name{
                background-color: rgb(170, 11, 184);
            }
        }
    }



`;

export default TestBox