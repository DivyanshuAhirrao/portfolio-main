
import { Label, Textarea } from "flowbite-react";

const TextArea = () => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your Precious message : " />
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        required
        rows={10}
      />
    </div>
  );
};

export default TextArea;
