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
          <Label htmlFor="comment" value="Your Precious message : " />
          <button
            className={`p-1 text-blue-600 border-2 border-blue-600 w-32 rounded-md transition-all duration-300 font-mono ${
              comment
                ? "hover:bg-blue-600 hover:text-purple-300"
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
          onChange={(e)=> handleCommentChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default TextArea;
