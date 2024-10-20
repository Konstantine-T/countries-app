import { useParams, useNavigate, useLocation } from "react-router-dom";

const LangSwitch = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageSwitch = () => {
    const newLang = lang === "en" ? "ka" : "en";

    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);

    navigate(newPath);
  };
  return (
    <button onClick={handleLanguageSwitch}>
      {lang === "en" ? "Change language" : "შეცვალე ენა, ბრო"}
    </button>
  );
};

export default LangSwitch;
