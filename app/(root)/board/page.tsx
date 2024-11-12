
const KanbanBoard = () => {
  const columns = [
    { 
      title: '🪵 Backlogs', 
      count: 6, 
      items: [
        { type: 'Project', title: 'Do a combined SQL and Tableau Project.' },
        { type: 'Goal', title: 'Give IELTS and French Exam.' },
        { type: 'Goal', title: 'Finish reading at least a book by the end of year.' },
        { type: 'Learning', title: 'Learn Tableau concepts.' },
        { type: 'Task', title: 'Utilize Apple Keynote for creative presentations.' },
        { type: 'Goal', title: 'Join Gym by the end of year.' },
      ]
    },
    { 
      title: '💡 Ideas', 
      count: 4, 
      items: [
        { type: 'Project', title: 'Implement available Regression model on a Kaggle dataset.' },
        { type: 'Task', title: 'Detailed article on creating blog theme from scratch.' },
        { type: 'Project', title: 'Build a Python program for activating theme licenses in blogger.' },
        { type: 'Task', title: 'Create and share Dashboards on Tableau Public.' },
      ]
    },
    { 
      title: '👷 In Progress', 
      count: 4, 
      items: [
        { type: 'Goal', title: 'Get active on LinkedIn.' },
        { type: 'Learning', title: 'Learning advanced SQL concepts.' },
        { type: 'Learning', title: 'Reading French language.' },
        { type: 'Dev', title: 'Leveraging Quarto for Notebook reports.' }
      ]
    },
    { 
      title: '💪 Completed', 
      count: 4, 
      items: [
        { type: 'Task', title: 'Building my personal Portfolio!' },
        { type: 'Project', title: 'Complete IBM Capstone project.' },
        { type: 'Goal', title: 'Get IBM data analyst certificate from coursera.' },
        { type: 'Learning', title: 'Enrolled with NPower for junior data analyst program.' }
      ]
    },
  ];

  return (
    <div className="flex flex-col max-w-screen-7xl mx-auto overflow-auto pl-6 md:pl-16 lg:pl-24 xl:pl-32 my-20">
      <div className="md:mx-auto max-w-[500px] md:max-w-[580px]">
      <h2 className=" text-3xl md:text-4xl mt-3 md:mt-10 font-extrabold">Welcome to my Kanban Board 📋</h2>
      <p className="text-md md:text-xl my-6 md:my-10 font-normal">In this space, I share my progress, plans, accomplishments, and random ideas. While it doesn&apos;t capture everything I&apos;m doing, it offers a glimpse into key parts of my journey. This keeps me alert and focused! <i>The design is inspired from <a href='https://codepen.io/robstinson/pen/BaLQQdX' target='_blank' rel='nofollow noopener external'>Rob&apos;s codepen.</a></i></p>
      <p className="mb-6 md:mb-10"><i>Last updated on: Nov 12, 2024</i></p>
      </div>
      <div className="flex flex-grow w-screen h-screen mt-4 md:mt-8 space-x-6 overflow-auto text-md md:text-xl">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col flex-shrink-0 w-96">
            <div className="flex items-center flex-shrink-0 h-10 px-2 mb-2">
              <span className="block font-semibold">{column.title}</span>
              <span className="flex text-singleCard-foreground items-center justify-center w-5 h-5 ml-2 font-semibold bg-white rounded bg-opacity-30">({column.count})</span>
            </div>
            <div className="flex flex-col pb-2 overflow-auto text-singleCard-foreground">
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex} className="relative flex flex-col items-start p-4 mt-3 bg-singleCard shadow-xl rounded-md border border-gray-400 cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                  <span className={`flex items-center h-6 px-3 text-sm md:text-base font-light rounded-full ${
                    item.type === 'Task' ? 'text-cyan-900 bg-cyan-100' : 
                    item.type === 'Dev' ? 'text-green-900 bg-green-100' :
                    item.type === 'Project' ? 'text-yellow-900 bg-yellow-100' :
                    item.type === 'Goal' ? 'text-purple-900 bg-purple-100' :
                    item.type === 'Learning' ? 'text-rose-900 bg-rose-100' : 
                    'text-gray-900 bg-gray-100'
                  }`}>
                    {item.type}
                  </span>
                  <h4 className="mt-3 font-light">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-6"></div>
      </div>
    </div>
  );
};

export default KanbanBoard;
