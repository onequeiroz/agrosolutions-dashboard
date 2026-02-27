const Header = ({ propertyName, overallStatus }) => {
  const getStatusColor = () => {
    switch (overallStatus) {
      case "Alerta":
        return "#dc2626";
      default:
        return "#16a34a";
    }
  };

  return (
    <header className="app-header">
      <div className="header-title">🌾 AgroSolutions</div>

      <div className="header-property">{propertyName}</div>

      <div
        className="header-status"
        style={{ backgroundColor: getStatusColor() }}
      >
        {overallStatus}
      </div>
    </header>
  );
};

export default Header;
