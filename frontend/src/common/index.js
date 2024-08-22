const backendDomain = "http://localhost:3500";

const SummaryApi = {
    SignUp: {
        url: `${backendDomain}/api/signup`, // ใช้ backticks   สำหรับ string template
        method: 'POST'
    }
};

export default SummaryApi;
