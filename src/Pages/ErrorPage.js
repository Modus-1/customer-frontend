import "../Styling/ErrorPage.css";
function ErrorPage() {
  return (
    <div className="ep-main-content">
      <div data-testid="ep-message" className="ErrorMessage">
        That link does not appear to be valid, please contact the staff
      </div>
    </div>
  );
}

export default ErrorPage;
