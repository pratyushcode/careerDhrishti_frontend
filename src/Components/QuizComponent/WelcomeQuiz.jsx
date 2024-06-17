// import React, { useEffect, useRef, useState } from "react";


// const WelcomeQuiz = ({onWelcomeChange}) => {


//   const [modalOpen, setModalOpen] = useState(false);

//   const trigger = useRef(null);
//   const modal = useRef(null);

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!modal.current) return;
//       if (
//         !modalOpen ||
//         modal.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setModalOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   });

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!modalOpen || keyCode !== 27) return;
//       setModalOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   });


//   return (
//     // <div className="w-full max-w-[570px] border-x-gray-950 rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
//     //     <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-black sm:text-2xl">
//     //           Your Message Sent Successfully
//     //     </h3>
//     //     <span
//     //       className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-blue-700`}
//     //     ></span>
//     //      <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
//     //           Lorem Ipsum is simply dummy text of the printing and typesetting
//     //           industry. Lorem Ipsum has been the industry's standard dummy text
//     //           ever since
//     //       </p>
//     //     <div>Ready to take the Aptitude Quiz ?</div>
//     //     <div>------------Here are some instructions for the Quiz------------</div>
        // <ol className="space-y-3">
        //   <ListItem count={1} text="This Quiz has to be attempted in order" />
        //   <ListItem count={2} text="Quiz has 4 sections" />
        //   <ListItem count={3} text="Each section has 10 questions (1 Question/section for the DEMO!)" />
        //   <ListItem count={4} text="Answer each question carefully, you can't revisit questions and change answers" />
        // </ol>
      
//     //     <button onClick={onWelcomeChange} className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-black transition hover:bg-blue-dark">Proceed to Quiz</button>
//     // </div>



//     <>
//     <div className="container mx-auto py-20">
//         <button
//           ref={trigger}
//           onClick={() => setModalOpen(true)}
//           className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
//         >
//           Open Modal
//         </button>
//         <div
//           className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
//             modalOpen ? "block" : "hidden"
//           }`}
//         >
//           <div
//             ref={modal}
//             onFocus={() => setModalOpen(true)}
//             onBlur={() => setModalOpen(false)}
//             className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
//           >
//             <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
//               Your Message Sent Successfully
//             </h3>
//             <span
//               className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
//             ></span>
//             <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since
//             </p>
//             <div className="-mx-3 flex flex-wrap">
//               <div className="w-1/2 px-3">
//                 <button
//                   onClick={() => setModalOpen(false)}
//                   className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
//                 >
//                   Cancel
//                 </button>
//               </div>
//               <div className="w-1/2 px-3">
//                 <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
//                   <a href={`/#`}> View Details </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default WelcomeQuiz

// const ListItem = ({ count, text }) => {
//   console.log("hello")
//   return (
//     <li className="text-body-color dark:text-dark-6 flex text-base">
//       <span className="bg-blue-700 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
//         {count}
//       </span>
//       {text}
//     </li>
//   );
// };



























import React, { useEffect, useRef, useState } from "react";

const WelcomeQuiz = ({onWelcomeChange})=>{

  return (
    <>
      <div className="container mx-auto py-20">
        <div
          className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-stone-900 px-4 py-5"
        >
          <div
            className="w-full max-w-[570px] rounded-[20px] border-red-500 bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-black sm:text-2xl">
            Ready to take the Aptitude Quiz ?
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-blue-500`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            ------------Here are some instructions for the Quiz-----------
            </p>
            <ol className="space-y-5">
              <ListItem count={1} text="This Quiz has to be attempted in order" />
              <ListItem count={2} text="Quiz has 4 sections" />
              <ListItem count={3} text="Each section has 5 questions " />
              <ListItem count={4} text="Answer each question carefully, you can't revisit questions and change answers" />
            </ol>
            <div className="flex justify-center mt-10">
                <button onClick={onWelcomeChange} className="block w-1/2 rounded-lg border border-primary bg-blue-500 p-3 text-center text-base font-medium text-white  hover:bg-blue-700">
                  Start Quiz
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeQuiz;

const ListItem = ({ count, text }) => {
  console.log("hello")
  return (
    <li className="flex text-base text-left items-center ">
      <span className="bg-blue-700 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded leading-5 text-white">
        {count}
      </span>
      {text}
    </li>
  );
};