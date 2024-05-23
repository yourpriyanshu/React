function CurrentTime() {
  let time = new Date();
  return (
    <p className="fs-3">
      This is Current Time:{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
