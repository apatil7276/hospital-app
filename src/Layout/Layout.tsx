import { useState } from "react";
import "./Layout.css"
import { IUser } from "./IUser";
import { IMonth } from "./IMonth";
interface IState {
    users: IUser[],
    // months:IMonth[]

}
interface IMonths {
    months: IMonth[]
}
const Layout: React.FC = () => {
    const cardStyles = {
        cardsection: {
            display: "flex",
            width: 355,
            height: 121,

            borderRadius: 10,
            // border-radius: 10px,
            backGround: '#CBE3FF',
            alignItems: "center",
            // backGround: var(--secondary, #CBE3FF),
            // align-items: center,
            overFlow: "auto",

        }


    };

    const [users, setUsers] = useState<IState>({
        users: [
            {
                name: "Sourabh",
                age: 22,
                gender: "male",
                id: 1,
                img:'demo1.jpg',
                bill_no: 123444455,
                date: '06/06/2023, 12:00',
                receipt_no: 12344556789,
                mobile_no: 9746848467,
                tax: 200,
                discount: 400,
                total: 9873673562,
                services: {
                    sr_no: 1,
                    service_name: "Consultation5",
                    price: 600,
                    quantity: 1,
                    amount: 400
                }
            },
            {
                name: "Vikas",
                age: 29,
                gender: "male",
                id: 2,
                img:'Rectangle 39.png',
                bill_no: 123444455,
                date: '01/08/2023, 12:00',
                receipt_no: 12344556789,
                mobile_no: 9746848467,
                tax: 300,
                discount: 700,
                total: 9873673562,
                services: {
                    sr_no: 2,
                    service_name: "Consultation4",
                    price: 700,
                    quantity: 3,
                    amount: 300
                }
            },
            {
                name: "Shubham",
                age: 25,
                gender: "female",
                id: 3,
                img:'https://i.pinimg.com/originals/38/ee/a5/38eea5bcdbe9cb52525d636513f15509.jpg',
                bill_no: 123444455,
                date: '04/09/2023, 12:00',
                receipt_no: 12344556789,
                mobile_no: 9746848467,
                tax: 600,
                discount: 700,
                total: 9873673562,
                services: {
                    sr_no: 3,
                    service_name: "Consultation3",
                    price: 700,
                    quantity: 6,
                    amount: 900
                }
            },
        ]
    })
    

    const incrimentMont = () => {

    }


    const [useOpen, setOpen] = useState(true);
    const [details, setDetails] = useState<any>({});
    const handleClick = (id: any) => {
        // console.log("click",id)
        // let data:any=users.users.filter(user=>user.id==id)
        setDetails(users.users.filter(user => user.id === id))

        setOpen(false)
    }
    console.log(details[0])

    return (
        <div className="grid-container">
            <div className="item1">
                <div className="logo">
                    <div className="logo-section">LOGO</div>
                </div>
                <div className="list-tabs">
                    <ul>
                        <li> <img src="Group 5.png" alt="" /> Dashboard</li>
                        <li><img src="Group 3.png" alt="" />  Patient</li>
                        <li> <img src="Vector.png" alt="" />  Appoiment</li>
                        <li> <img src="Group 148.png" alt="" />Billing</li>
                        <li style={{
                            padding: 1, background: "rgba(147, 147, 147, 0.50)",
                            height: "unset", border: 'unset'
                        }}></li>
                    </ul>
                    <ul>
                        <li> <img src="Vector1.png" alt="" /> Support</li>
                        <li><img src="Group.png" alt="" />  Setting</li>
                    </ul>
                </div>

            </div>
            <div className="item2">
                <div className="header-section">
                    <div className="search-bar">
                        <img src="Vector 2.png" alt="" />
                        <input type="text" placeholder="Search Patients" />
                    </div>
                    <div className="Bageg">
                        Make an Appointment
                    </div>
                    <div className="Bageg">
                        Add Patient
                    </div>
                    <img src="Group 228.png" alt="" />
                </div>
                <div className="overview-section">
                    <div className="overview-text">Billing Overview</div>
                    <div className="cal-of-month">
                        <img src="MdArrowForwardIos.png" alt="" style={{
                            width: 38.935, height: 37.377, borderRadius: 5,
                            background: "var(--Primary, #312E81)"
                        }} />
                        February 2021
                        <img src="MdArrowForwardIos1.png" alt="" style={{
                            width: 38.935, height: 37.377, borderRadius: 5,
                            background: "var(--Primary, #312E81)"
                        }} />
                    </div>
                </div>
                <div className="card-details-section">
                    <div className="card-area">
                        <div className="card-details">
                            {
                                users.users.map((user => (
                                    <div className="card-section" key={user.id} style={{ background: details[0]?.id == user.id ? "#ffffff" : "#CBE3FF" }} onClick={() => handleClick(user.id)}>
                                        <div className="img-section">
                                            <img src={user.img} alt="" height={101} width={101} style={{borderRadius:9}}/>
                                        </div>
                                        <div className="profile-section">
                                            <div className="profile-text">{user.name}</div>
                                            <div className="profile-text">{user.age},{user.gender}</div>
                                            <div className="profile-text">
                                                {
                                                    details[0]?.id == user.id ? <div className="view-discription" >View Prescription </div> : <div className="profile-text"><div className="bill-no">Bill No</div>  &nbsp; &nbsp;<div className="d">012345678 </div></div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )))
                            }
                        </div>
                    </div>
                    {
                        details[0]?.id ? 
                        <div className="billing-section">
                        <div className="bill-receipt">
                            <div className="recept-header">
                                <div className="billing-details-title">Billing Details</div>
                                <div className="print-btn">Print Bill</div>
                            </div>
                            <div className="profile-details-section">
                                <div className="d">
                                    <div className="profile-title">Patient Name</div>
                                    <div className="profile-name">{details[0]?.name}</div>
                                </div>
                                <div className="d">
                                    <div className="profile-title">Age/Gender</div>
                                    <div className="profile-name">{details[0]?.age}/ {details[0]?.gender}</div>
                                </div>
                                <div className="d">
                                    <div className="profile-title">Bill No </div>
                                    <div className="profile-name">{details[0]?.bill_no}</div>
                                </div>
                                <div className="d">
                                    <div className="profile-title">Date/ Time</div>
                                    <div className="profile-name">{details[0]?.date}</div>
                                </div>
                                <div className="d">
                                    <div className="profile-title">Receipt No</div>
                                    <div className="profile-name">{details[0]?.receipt_no}</div>
                                </div>
                            </div>
                            <div className="d" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                                <div className="d">
                                    <table>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Service Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Amount</th>
                                        </tr>
                                        <tr>
                                            <td>{details[0]?.services.sr_no}</td>
                                            <td >{details[0]?.services.service_name}</td>
                                            <td>{details[0]?.services.price}</td>
                                            <td>{details[0]?.services.quantity}</td>
                                            <td>{details[0]?.services.amount}</td>
                                        </tr>

                                    </table>
                                </div>
                                <div className="d">
                                    <div className="profile-details-section">
                                        <div className="d">
                                            <div className="profile-name">Mobile Number</div>
                                            <div className="profile-name">Tax</div>
                                            <div className="profile-name">Discount</div>
                                        </div>
                                        <div className="d" style={{ textAlign: "end" }}>
                                            <div className="profile-name">{details[0]?.mobile_no}</div>
                                            <div className="profile-name">{details[0]?.tax}</div>
                                            <div className="profile-name">{details[0]?.discount}</div>
                                        </div>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="total-count">
                                        <div className="profile-name" style={{ fontWeight: 700 }}>Total</div>
                                        <div className="profile-name">{details[0]?.total}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        : ''
                    }
                    
                </div>
            </div>
        </div>
    );
}
export default Layout;
