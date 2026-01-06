// Since the strict mode is on by default, we are seeing inconsistent results.

let count = 0;
const Message = () => {
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;
