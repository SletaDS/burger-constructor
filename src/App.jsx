import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import {addtrash} from "./redux/Slice";
import trash from "./icons8-мусор-64.png";
function App() {
  const dispatch=useDispatch()
  let [money,setmoney]=useState(0)
  let h=0
  h=useSelector(state=>state.todos.trash)

  let b = useSelector((state) => state.todos.todos);
  let c = useSelector((state) => state.todos.spice);
  let ref=useRef()
  const [boards, setBoards] = useState([
    b,
    {
      id: 2,
      title: "make2",
      square: false,
      items: [],
    },
  ]);
  let [Currentboard, setCurrentboard] = useState(null);
  let [CurrentItem, setCurrentItem] = useState(null);
  let [Checkboard, setcheckboard] = useState(null);

  function dragleaveHandler(e, board) {
    if (board == boards[1]) {
      e.target.closest("div").className =
        "item flex justify-between mt-3 w-full bg-transparent text-white mb-0  ";
    }
  }

  function dragoverHandler(e, item, board) {
    e.preventDefault();
    if (board == boards[1]) {
      e.target.closest("div").className =
        "item flex justify-between mt-2 w-full bg-transparent text-white mb-4 animation ";
    }
  }

  function dragStartHandler(e, board, item) {
    setCurrentboard(board);
    setCurrentItem(item);

    setcheckboard(board.id);
  }

  function dragEndHandler(e) {
  
 
  }
   function main(){
    if(boards[1].items.length>=3){dispatch(addtrash([boards[1].items,{allprice:money}]))}
    setBoards((prev)=>[prev[0], {
      id: 2,
      title: "make2",
      square: false,
      items: [],
    }])}


  function dragDropEnd(e, board, item) {
    if (board == boards[1]) {
      e.target.closest("div").className =
      "item flex justify-between mt-3 w-full bg-transparent text-white mb-0 ";
    }

    if (board.id === Checkboard) {
    } else {
      e.preventDefault();
      if (board == boards[0]) {
        const currentIndex = Currentboard.items.indexOf(CurrentItem);
        Currentboard.items.splice(currentIndex, 1);
      }
      if (board == boards[1]) {
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, CurrentItem);
      }
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }

          if (b.id === Currentboard.id) {
            return Currentboard;
          }
          return b;
        })
      );
    }
  }


  function dragcardEnd(e, board) {
    if (board.items.length === 0) {
      board.items.push(CurrentItem);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === Currentboard.id) {
            return Currentboard;
          }

          return b;
        })
      );
    }
  }

   useEffect(()=>{
    let a=0
    for( let x of boards[1].items){
     a=a+x.price
    }

  setmoney(a)}
   ,[boards])
  function deleten(item, board) {
    board.items.splice(board.items.indexOf(item), 1);
    setBoards((prev) => [prev[0], (prev[1] = board)]);

  };

 
  return (
    <>
      <div className=" bg-newcolor h-[100vh]">
        <header className="h-14 flex bg-newcolor1 border-b-2 justify-between">

          <span className="italic self-center text-4xl mb-2 ml-[35%] text-white">Burger constructor</span>
          <button className="text-white text-xl self-center border-black border h-[100%] px-6" onClick={()=>ref.current.hidden=!ref.current.hidden}>trash</button>
        </header>
        <span className="w-80 h-80 bg-newcolor1 border-2 rounded-2xl absolute right-[30px] span " ref={ref} hidden={true}>
         {h.map((item,i)=>(<div key={i} className="flex border m-4 rounded-xl text-white border-white h-auto justify-between "><div className=" flex  flex-col">{item[0].map((item,i)=>(<p key={i} className="border flex justify-center first:rounded-t-2xl last:rounded-b-2xl border-white px-2 m-1">{item.title}</p>))}
         </div><div className="flex flex-row "><p className="text-lg self-center mx-2 ">{item[1].allprice}</p></div> </div>))}
        
        </span>
        <div className="mx-4 ">
        <span className="flex  text-white text-4xl italic mt-12 mb-20">Собери свой бургер</span>
        <nav className=" border flex w-[47%]  border-t-4 inline border-x-4 p-[0.55%] rounded-t-2xl">
          <button
            className="w-[25%] bg-newcolor1  text-white hover:border-b-violet-500"
            onClick={() => setBoards((prev) => [b, prev[1]])}
          >
            main dishes
          </button>
          <button
            className=" w-[25%] border-l-2 border-white bg-newcolor1  text-white hover:border-b-violet-500"
            onClick={() => setBoards((prev) => [c, prev[1]])}
          >
            spice
          </button>
          <button className="w-[25%] border-l-2 border-white  bg-newcolor1 text-white hover:border-b-violet-500">
            drink
          </button>
          <button className="w-[25%] border-l-2 border-white bg-newcolor1 text-white hover:border-b-violet-500"
          >
            eat
          </button>
        </nav>
        <section >
          <div className="flex w-full justify-between ">
            {boards.map((board,i) => (
              <div key={i}
                className={board.square ? "board1" : "board "}
                onDragOver={(e) => dragoverHandler(e)}
                onDrop={(e) => dragcardEnd(e, board)}
              >
                {board.items.map((item,i) => (
                <div key={i}
                    className={
                      board.square
                        ? "item2 flex justify-center"
                        : "item flex justify-between mt-3 w-full bg-transparent text-white "
                    }
                    onDragOver={(e) => dragoverHandler(e, item, board)}
                    onDragLeave={(e) => dragleaveHandler(e, board)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dragDropEnd(e, board, item)}
                    draggable={true}
                  >
                    <p >
                      {item.title},{item.price}
                    </p>
                    {board.square ? null : (
                      <button
                        className="trash"
                        onClick={() => deleten(item, board)}
                      >
                        <img src={trash} className="self-center " />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        <footer >
          <span className="text-white text-lg ml-[76%] mr-4 ">{money}</span>
          <button className="w-30 px-4 h-10 rounded-3xl text-white text-lg bg-newcolor1 border-2 border-white mt-8 " onClick={main}>Оформить заказ</button>
        </footer></div>
      </div>
    </>
  );
}

export default App;
