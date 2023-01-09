// react-quill components
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// react-quill styles
import style from "./quill.module.scss";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// Custom styles for the SoftEditor
// import SoftEditorRoot from "components/SoftEditor/SoftEditorRoot";
const modules = {
  toolbar: false,
};
function SoftEditor(props) {
  return (
    <ReactQuill
      className={style.newQuill}
      readOnly
      modules={modules}
      // theme="snow"
      {...props}
    />
  );
  // <SoftEditorRoot>

  {
    /* </SoftEditorRoot> */
  }
  // );
}

export default SoftEditor;
