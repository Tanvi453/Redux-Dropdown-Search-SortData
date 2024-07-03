import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, update, sortData, searchData } from './actions';

function App() {

  const dispatch = useDispatch();
  const selector = useSelector((selecter) => selecter);
  const [people, setPeople] = useState({ fname: '', age: '', email: '', Password: '' });
  console.log(selector);
  const [isEdit, setIsEdit] = useState(-1);
  const [selected, setSelected] = useState("");
  const [searched, setSearched] = useState("");


  const handleChange = (e) => {
    console.log(e.target.name)
    setPeople({ ...people, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (isEdit === -1) { dispatch(addData(people)) }
    else {
      dispatch(update(people, isEdit))
    }
  }

  const handleEdit = (item, idx) => {
    setPeople(item)
    setIsEdit(idx)
  }

  const sorting = () => {

    dispatch(sortData(selected))

  }

  const searching = () => {

    dispatch(searchData(searched, selected))

  }

  return (
    <>
      <div style={{ backgroundImage: "url(https://virtual-bg.com/wp-content/uploads/2020/06/professional-2-background-for-zoom-or-teams-unsplash.jpg)", height: "955px", width: "100%", backgroundSize: "cover" }} className='flex jusify-start'>
        <div className='flex flex-col items-center gap-[60px] pt-[7%] ml-[15%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor="fname" className='font-bold text-xl text-[#3e4e2d]'>Full Name:</label>
            <input type="text" id="fname" name="fname" value={people.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#a38772]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="age" className='font-bold text-xl text-[#3e4e2d]'>Age:</label>
            <input type="number" id='age' name="age" value={people.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#a38772]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='font-bold text-xl text-[#3e4e2d]'>E-mail:</label>
            <input type="email" id='email' name="email" value={people.email} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#a38772]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="Password" className='font-bold text-xl text-[#3e4e2d]'>Password:</label>
            <input type="password" id="Password" name="Password" value={people.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#a38772]' />
          </div>

          <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent text-[#3e4e2d] border-[#a38772]' >Submit</button>

        </div>

      </div>

      <div className='flex justify-center gap-[50px] mt-[50px]'>

        <div>
          <select onChange={(e) => setSelected(e.target.value)} className='h-[40px] w-[180px] bg-transparent text-[16px] font-bold text-[#3e4e2d] border-[#a38772] border-2 rounded-[5px]'>
            <option value="">Select Field:</option>
            <option value="fname">Full Name</option>
            <option value="age">Age</option>
            <option value="email">E-mail</option>
            <option value="Password">Password</option>
          </select>
        </div>

        <div>
          <button type="button" onClick={sorting} className='h-[40px] w-[100px] bg-transparent text-[16px] font-bold text-[#3e4e2d] border-[#a38772] border-2 text-[20px] rounded-[10px]'>Sort</button>
        </div>

        <div>
          <input type="search" id="search" name="search" onChange={(e) => setSearched(e.target.value)} className='border-[#4c5a40] rounded-[5px] h-[30px] w-[300px]' /> <button type='search' onClick={searching} className='border-[#4c5a40] rounded-[5px] h-[30px] w-[50px]'> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> </button>
        </div>

      </div>

      <div className='flex gap-[20px] justify-center mt-[30px]'>

        <table>

          <thead>
            <th>Full Name:</th>
            <th>Age:</th>
            <th>E-mail:</th>
            <th>Password:</th>
          </thead>

          <tbody>

            {selector?.formReducer?.map((item, index) => {
              return (
                <tr>

                  <td>{item?.fname}</td>
                  <td>{item?.age}</td>
                  <td>{item?.email}</td>
                  <td>{item?.Password}</td>
                  <td>
                    <button onClick={() => {
                      dispatch(deleteData(index))
                    }}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => {
                      handleEdit(item, index)
                    }}>Edit</button>
                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>
      </div>
    </>
  );
}

export default App;
