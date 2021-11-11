import React, {useRef} from "react";
import Toggable from './Toggable';
import CreateNewBlog from './CreateNewBlog.js';

const ToggableCreateNewForm = () => {

  const createNewBlogRef = useRef();

  return (
    <Toggable labelShow='Add a new blog' labelHide='Cancel' key='toggableNewBlog' ref={createNewBlogRef}>
      <CreateNewBlog key="createnewblog" hideForm={()=>createNewBlogRef.current.toggleVisible()} />
    </Toggable>
  )
};

export default ToggableCreateNewForm