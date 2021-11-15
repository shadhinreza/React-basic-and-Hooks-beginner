import {useRef,useEffect} from 'react';

const UseEffect = () => {
    const ref = useRef('shadhin')
    useEffect(() => {
       console.log(ref)
    }, []);
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(ref.current.value)
        ref.current.value = ''
    }
    return (
        <div className='col-md-4'>
            <form onSubmit={submitHandler}>
                <input type="text" className='form-control' ref={ref}/>
                <br />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default UseEffect;
