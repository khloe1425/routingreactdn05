import React,{useEffect,useState} from 'react'

export default function UseEffectDemo() {

    //useEffect thay thế cho didmount, didupdate
    //? Class component
    //?didmount: chạy sau render UI khi load ứng dụng lên
    //? didupdate: chạy sau render UI khi có sự thay đổi state, props

    let [number,setNumber] = useState(0);
    let [like,setLike] = useState(0);

    // useEffect(() => { 
    //     //code chạy sau khi render xong UI
    //     console.log("useEffect");
    //     console.log("didmount");
    //     console.log("didupdate");
    //  })
    //  userEffect(hàm callback, []) => chạy 1 lần (didmount)
    useEffect(() => { 
        //khi sử dụng các thư viện (carousel, countUp)
        console.log("didmount");
     },[])

    // userEffect(hàm callback, [number]) => (didupdate)
     useEffect(() => { 
        console.log("didupdate");
    }, [like]);

    //? willUnmout: chạy remove, rời khỏi component hiện tại
    useEffect(() => { 
        return () => { 
            //code xử lý khi rời khỏi component, remove component
            console.log("willUnmout component UseEffectDemo");
         }
     },[])



  return (
    <div>
        {console.log("UI")}
        UseEffectDemo
        <p>Number {number}</p>
        <button className='btn btn-danger' onClick={() => { 
            setNumber(number + 1);
         }} >Tăng Number</button>
         <p>Like {like}</p>
          <button className='btn btn-danger' onClick={() => { 
            setLike(like + 1);
         }} >Tăng Like</button>
    </div>
  )
}
