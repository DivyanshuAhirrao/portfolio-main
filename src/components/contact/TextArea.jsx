import { Label, Textarea } from "flowbite-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const TextArea = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (value) => {
    setComment(value);
  };
  const submitComment = () => {
    toast.success("Form Submitted successfully !!");
    setComment("");
  };
  return (
    <>
      <Toaster position="top-center"/>
      <div className="max-w-md">
        <div className="mb-2 block flex justify-between">
          <Label className="relative left-6" htmlFor="comment" value="Your Precious message : " />
          <button
            className={`p-[2px] text-blue-600 border-2 border-[#1976D2] w-28 rounded-md transition-all duration-300 font-mono relative bottom-1 ${
              comment
                ? "hover:bg-[#1976D2] hover:text-purple-300 opacity-90"
                : "opacity-40 cursor-not-allowed"
            }`}
            disabled={!comment}
            onClick={submitComment}
          >
            SUBMIT
          </button>
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required
          rows={10}
          value={comment}
          className="scale-90 relative left-2"
          onChange={(e)=> handleCommentChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TextArea;
