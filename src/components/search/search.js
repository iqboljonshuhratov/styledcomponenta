import styled from "styled-components";

const MainBox = styled.div`

border: 1px solid white;
padding-bottom: 10px;
background-color: #001d53 !important;


.text{
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        color: darkgoldenrod;
    }
    p{
        text-align: center;
    }


}

.row{
    width: 100%;
    
    .col-sm-9{
        
        #bg{
            background-color: #000b22d7 !important;
            
            color: white;

        }
    }
}


`;

export default MainBox;