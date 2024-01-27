'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const Create = () => {
  const price_type_enum = { FREE: 'FREE', PAID: 'PAID' };
  const category_enum = {
    hobby: 'Hobby',
    concert: 'Concert',
    attraction: 'Attraction',
    beauty: 'Beauty',
  };

  const [tittle, settittle] = useState('');
  const [description, setdescription] = useState('');
  const [img, setimg] = useState('');
  const [date_event, setdate_event] = useState('');
  const [price_type, setprice_type] = useState(price_type_enum.FREE);
  const [category, setcategory] = useState(price_type_enum.concert);
  const [price, setprice] = useState('');
  const [place, setplace] = useState('');
  const [seats, setseats] = useState('');
  const [terms, setterms] = useState('');
  const [time, settime] = useState('');
  const [rating, setrating] = useState('');
  const [available, setavailable] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/event/createevent',
        {
          tittle: tittle,
          description: description,
          img: img,
          date_event: date_event,
          price_type: price_type,
          price: price,
          placel: place,
          seats: seats,
          terms: terms,
          time: time,
        },
      );

      if (response.status === 201) {
        console.log(succses);
      } else {
        console.log(gagal);
      }
    } catch (error) {}
  };
  console.log;
  return (
  

    <div className="bg-[#555486]    ">
        <Navbar/>
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto rounded-xl mb-10 mt-10 ">
        <h2 className="text-2xl font-bold ">Make Your Own Event</h2>
        <p className="my-4 opacity-70">
          Adipisicing elit. Quibusdam magnam sed ipsam deleniti debitis
          laboriosam praesentium dolorum doloremque beata.
        </p>
        <hr className="my-6" />
        <form action="">
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Tittle
            </label>
            <input
              value={tittle}
              onChange={(e) => settittle(e.target.value)}
              type="text"
              id="name"
              placeholder="Tittle"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            >
              {Object.values(category_enum).map((enumValue) => (
                <option key={enumValue} value={enumValue}>
                  {enumValue}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Date
            </label>
            <input
              value={date_event}
              onChange={(e) => setdate_event(e.target.value)}
              type="date"
              id="date"
              placeholder="date"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Location
            </label>
            <input
              value={place}
              onChange={(e) => setplace(e.target.value)}
              type="text"
              id="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              type="text"
              id="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Terms
            </label>
            <input
              value={terms}
              onChange={(e) => setterms(e.target.value)}
              type="text"
              id="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Seats
            </label>
            <input
              value={seats}
              onChange={(e) => setseats(e.target.value)}
              type="number"
              id="number"
              placeholder="number"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Time
            </label>
            <input
              value={time}
              onChange={(e) => settime(e.target.value)}
              type="time"
              id="time"
              placeholder="time"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                     font-bold text-gray-600"
            >
              Ticket Category
            </label>

            <select
              value={price_type}
              onChange={(e) => setprice_type(e.target.value)}
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            >
              {Object.values(price_type_enum).map((enumValue) => (
                <option key={enumValue} value={enumValue}>
                  {enumValue}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-right 
                                             font-bold text-gray-600"
            >
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setprice(e.target.value)}
              type="number"
              id="number"
              placeholder="number"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
      </div>
  );
   
    
};
export default Create;
