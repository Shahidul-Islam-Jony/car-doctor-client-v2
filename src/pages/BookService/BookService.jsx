import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    // console.log(service);
    const { title, _id, price,img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        // const email = form.email.target;
        const email = user?.email;
        const booking={
            customerName: name,
            email:email, //just email if have same name
            img,   
            date,
            service: title,
            service_id : _id,  //for finding service
            price,
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('SErvice booked successfully')
            }
        })

    }

    return (
        <div>
            <h2 className="text-3xl text-center">Book service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-block btn-secondary" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookService;