const Header = ({ propertyName, overallStatus }) => {
  const getStatusColor = () => {
    switch (overallStatus) {
      case "Normal":
        return "#16a34a";
      case "Alerta":
        return "#f59e0b";
      case "Crítico":
        return "#dc2626";
      default:
        return "#64748b";
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
