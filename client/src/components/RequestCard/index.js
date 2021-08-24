import React from 'react'
import { CardContainer,Customer,OrderDate,RequestDate,Unit,Address,Number,Respond,BtnWrapper,Button,Container } from './RequestCardElements';
const obj={
    customer : "nuvin",
    orderdate: new Date().toLocaleDateString(),
    requestdate: new Date().toLocaleDateString(),
    unit : 5,
    address : "25/5, polgasowita rd, mattegoda",
    number : "0716307368"
}
const RequestCard = () => {
    return (
      
           <CardContainer>
           <Customer>
                {obj.customer}
           </Customer>
           <OrderDate>
                {obj.orderdate}
           </OrderDate>
           <RequestDate>
                    {obj.requestdate}
           </RequestDate>
           <Unit>
                {obj.unit}
           </Unit>
           <Address>
                {obj.address}
           </Address>
           <Number>
                {obj.number}
           </Number>
           <Respond>
               <BtnWrapper>
                    <Button>accept</Button>
                    <Button>reject</Button>
               </BtnWrapper>
           </Respond>
       </CardContainer>
     
    )
}

export default RequestCard;
