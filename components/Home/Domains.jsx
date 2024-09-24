import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

function Domains() {
    const [domain, setDomain] = React.useState(""); // Current domain state
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Function to switch domain
    const handleDomainChange = (selectedDomain) => {
        if (selectedDomain !== domain) {
            setDomain(selectedDomain);
            handleOpen(); // Open modal when domain changes
        }
    };

    return (
        <div className="p-20">
            <h1 className="text-4xl text-white mb-10 font-bold font-poppins text-center">
                Our Domains
            </h1>
            <section className="domain-box container flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 text-center">
                    <div
                        className="drop-shadow-glow filter bg-domain_bg rounded-xl p-6 shadow-lg text-white h-[200px] w-[200px] sm:w-[250px] sm:h-[250px] flex flex-col justify-center items-center transition-all duration-300 ease-in-out"
                        // onClick={() => handleDomainChange('Technical')}
                    >
                        <div>
                            <svg
                                width="101"
                                height="101"
                                viewBox="0 0 101 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_2486_413)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M46.999 8.32275V29.1341H31.4504C32.3462 25.7364 33.4655 22.6358 34.7658 19.9191C37.987 13.1899 42.2878 8.86109 46.999 8.32275Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.2942 29.1341C17.563 17.5746 29.1329 9.30681 42.7443 7.59766C38.9568 9.55391 35.6003 13.5826 32.9778 19.0631C31.5598 22.0225 30.3508 25.4158 29.4006 29.1341H11.2942Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M30.9546 31.127H46.9959V48.0008H29.0189C29.0866 41.9584 29.7749 36.2441 30.9546 31.127Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.27759 48.0008C6.41879 41.9732 7.83818 36.2603 10.2754 31.127H28.9187C27.7655 36.2779 27.0948 41.9864 27.0272 48.0008H6.27759Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M29.0189 49.9927H46.9959V67.0886H30.984C29.7882 61.917 29.0881 56.1233 29.0189 49.9927Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.3843 67.0886C7.88231 61.8964 6.42173 56.1086 6.27759 49.9927H27.0272C27.0963 56.0938 27.7935 61.8773 28.9908 67.0886H10.3843Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M31.4814 69.0815H46.9991V89.6723C40.3405 88.9339 34.5894 80.8279 31.4814 69.0815Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.8124 90.4048C29.2583 88.725 17.7223 80.544 11.4152 69.0815H29.4833C32.2236 79.5453 37.0392 87.4145 42.8124 90.4048Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M67.1498 86.0802C62.8931 88.2821 58.2084 89.7736 53.2516 90.3958C57.0405 88.441 60.3971 84.4108 63.0211 78.9303C63.2491 78.4523 63.4727 77.964 63.6904 77.4639L67.1498 86.0802Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M62.6289 74.8223C62.1891 75.9593 61.7228 77.0448 61.2301 78.0744C58.0089 84.8037 53.708 89.1324 48.9954 89.6708V69.0815H60.3225L62.6289 74.8223Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M84.5771 69.0815C84.505 69.211 84.4329 69.3404 84.3609 69.4684L83.3739 69.0815H84.5771Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M59.5224 67.0886H48.9954V49.9927H66.9738C66.94 52.8918 66.7649 55.7144 66.4605 58.4325L54.0963 53.5787L59.5224 67.0886Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M89.716 49.9927C89.5821 55.7335 88.2863 61.1845 86.0579 66.1252L68.3781 59.1841C68.7296 56.2292 68.9311 53.1536 68.9664 49.9927H89.716Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M66.9738 48.0008H48.9954V31.127H65.0587C66.2237 36.2412 66.9047 41.957 66.9738 48.0008Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M85.711 31.127C88.1482 36.2603 89.5676 41.9732 89.7088 48.0008H68.9593C68.8916 41.9864 68.2135 36.2794 67.0471 31.127H85.711Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M64.5719 29.1341H48.9954V8.32129C55.6966 9.06408 61.4772 17.2671 64.5719 29.1341Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M53.1829 7.58887C66.8237 9.28037 78.4215 17.554 84.7007 29.1342H66.5693C63.8378 18.5601 58.9957 10.6012 53.1829 7.58887Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M89.9527 69.6329L57.4244 56.8628L70.5093 89.444L76.8958 82.9354L87.2316 93.2904L94.3286 86.2052L83.9207 75.7782L89.9527 69.6329Z"
                                        fill="#0DFF4E"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2486_413">
                                        <rect
                                            width="99.625"
                                            height="99.625"
                                            fill="white"
                                            transform="translate(0.484375 0.466797)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Technical
                        </h2>
                    </div>

                    <div
                        className="drop-shadow-glow filter bg-domain_bg rounded-xl p-6 shadow-lg text-white h-[200px] w-[200px] sm:w-[250px] sm:h-[250px] flex flex-col justify-center items-center"
                        // onClick={() => handleDomainChange('Creatives')}
                    >
                        <div>
                            <svg
                                width="108"
                                height="107"
                                viewBox="0 0 108 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M103.381 80.8081H4.02527V101.537H103.381V80.8081Z"
                                    fill="white"
                                />
                                <path
                                    d="M39.0719 71.9805H68.4698H103.381V80.808H4.02527V71.9805H39.0719Z"
                                    fill="white"
                                />
                                <path
                                    d="M101.743 8.36963H91.202V18.9129H101.743V8.36963Z"
                                    fill="#0DFF4E"
                                />
                                <path
                                    d="M87.1389 40.6914H94.4011V53.9389H81.1556V40.6914H87.1389Z"
                                    fill="#0DFF4E"
                                />
                                <path
                                    d="M53.7035 44.8167C52.9042 44.8167 52.1227 45.0538 51.4581 45.4979C50.7934 45.942 50.2754 46.5732 49.9694 47.3118C49.6635 48.0503 49.5835 48.863 49.7394 49.647C49.8954 50.431 50.2803 51.1512 50.8456 51.7164C51.4108 52.2817 52.131 52.6666 52.915 52.8226C53.6991 52.9785 54.5117 52.8985 55.2503 52.5926C55.9888 52.2867 56.62 51.7686 57.0641 51.104C57.5083 50.4393 57.7453 49.6579 57.7453 48.8585C57.7452 47.7866 57.3193 46.7586 56.5614 46.0007C55.8034 45.2427 54.7754 44.8168 53.7035 44.8167ZM53.7035 24.865L70.7337 57.0402L68.4704 71.9805H39.0725L36.6734 57.0402L53.7035 24.865ZM53.5593 5.46289C55.2736 5.46305 56.9347 6.05756 58.2598 7.14513C59.5849 8.23271 60.4919 9.74607 60.8263 11.4274C61.1607 13.1087 60.9018 14.8539 60.0937 16.3658C59.2857 17.8776 57.9784 19.0625 56.3947 19.7186C54.811 20.3747 53.0488 20.4614 51.4083 19.9639C49.7678 19.4665 48.3506 18.4156 47.398 16.9904C46.4455 15.5651 46.0165 13.8537 46.1843 12.1477C46.352 10.4417 47.1061 8.84663 48.318 7.63424C49.0063 6.94587 49.8234 6.39981 50.7227 6.02725C51.622 5.65468 52.5859 5.46292 53.5593 5.46289Z"
                                    fill="#0DFF4E"
                                />
                                <path
                                    d="M53.7037 52.9004C55.9359 52.9004 57.7454 51.0909 57.7454 48.8587C57.7454 46.6265 55.9359 44.8169 53.7037 44.8169C51.4715 44.8169 49.6619 46.6265 49.6619 48.8587C49.6619 51.0909 51.4715 52.9004 53.7037 52.9004Z"
                                    fill="white"
                                />
                                <path
                                    d="M25.9624 40.6914H12.717V53.9389H25.9624V40.6914Z"
                                    fill="#0DFF4E"
                                />
                                <path
                                    d="M16.2031 14.0018V18.9129H5.66193V8.36963H16.2031V14.0018Z"
                                    fill="#0DFF4E"
                                />
                                <path
                                    d="M5.6618 20.6894H16.203C16.6665 20.6694 17.1055 20.4754 17.4324 20.1462C17.7593 19.817 17.9501 19.3766 17.9668 18.913V15.6737H36.2918C31.871 18.1194 28.0135 21.4669 24.9694 25.4991C21.9254 29.5313 19.7628 34.1583 18.6218 39.08H12.7171C12.5021 39.0736 12.2881 39.1107 12.0878 39.189C11.8874 39.2673 11.705 39.3852 11.5512 39.5356C11.3975 39.686 11.2757 39.8659 11.193 40.0644C11.1104 40.263 11.0687 40.4762 11.0703 40.6912V53.9388C11.0679 54.1559 11.1088 54.3713 11.1906 54.5725C11.2725 54.7736 11.3936 54.9564 11.547 55.1101C11.7003 55.2638 11.8828 55.3854 12.0837 55.4678C12.2846 55.5502 12.5 55.5916 12.7171 55.5897H25.9625C26.1781 55.5909 26.3918 55.5488 26.5907 55.4658C26.7897 55.3829 26.97 55.2607 27.1209 55.1067C27.2718 54.9527 27.3902 54.77 27.469 54.5694C27.5479 54.3687 27.5857 54.1543 27.5801 53.9388V40.6912C27.585 40.4778 27.5465 40.2655 27.4668 40.0674C27.3872 39.8693 27.2682 39.6894 27.1169 39.5387C26.9656 39.388 26.7853 39.2696 26.5868 39.1908C26.3884 39.1119 26.176 39.0742 25.9625 39.08H22.0664C23.4883 33.5251 26.3527 28.4445 30.3695 24.3526C34.3864 20.2607 39.413 17.3027 44.9406 15.7782C45.5522 17.5785 46.7122 19.142 48.2577 20.2494C49.8033 21.3568 51.6568 21.9524 53.5581 21.9526C55.4594 21.9529 57.313 21.3577 58.8588 20.2507C60.4046 19.1437 61.565 17.5804 62.177 15.7803C67.7051 17.3031 72.7324 20.2603 76.7493 24.352C80.7663 28.4438 83.6302 33.5247 85.0508 39.08H81.1553C80.2318 39.08 79.4082 39.768 79.4082 40.6912V53.9388C79.4082 54.8623 80.2318 55.5897 81.1553 55.5897H94.4007C94.8477 55.5965 95.2793 55.4271 95.6023 55.1181C95.9253 54.8092 96.1138 54.3855 96.127 53.9388V40.6912C96.127 39.768 95.3242 39.08 94.4007 39.08H88.4946C87.3553 34.1585 85.194 29.5315 82.1511 25.4992C79.1081 21.4669 75.2514 18.1194 70.8313 15.6737H89.4395V18.913C89.4562 19.3766 89.647 19.817 89.9739 20.1462C90.3008 20.4754 90.7398 20.6694 91.2033 20.6894H101.744C102.668 20.6894 103.441 19.8363 103.441 18.913V8.36972C103.436 7.92265 103.255 7.49559 102.938 7.18081C102.62 6.86603 102.192 6.68879 101.744 6.6874H91.2033C90.2798 6.6874 89.4395 7.44622 89.4395 8.36972V12.33H62.6236C62.4859 10.0192 61.4709 7.84835 59.786 6.26096C58.1012 4.67358 55.8738 3.78955 53.5589 3.78955C51.2441 3.78955 49.0166 4.67358 47.3318 6.26096C45.647 7.84835 44.632 10.0192 44.4942 12.33H17.9668V8.36972C17.9668 7.44622 17.1265 6.6874 16.203 6.6874H5.6618C5.21469 6.68879 4.78608 6.86603 4.46857 7.18081C4.15105 7.49559 3.97011 7.92265 3.96484 8.36972V18.913C3.96484 19.8363 4.73809 20.6894 5.6618 20.6894ZM24.2363 42.4237V52.246H14.4141V42.4237H24.2363ZM92.7832 42.4237V52.246H82.752V42.4237H92.7832ZM92.7832 10.0311H100.098V17.3456H92.7832V10.0311ZM49.4998 8.81632C50.4387 7.87639 51.6745 7.29112 52.9966 7.16024C54.3187 7.02936 55.6452 7.36098 56.7502 8.09858C57.8552 8.83617 58.6702 9.93411 59.0564 11.2053C59.4426 12.4765 59.376 13.8422 58.868 15.0698C58.3601 16.2974 57.4421 17.3109 56.2707 17.9375C55.0992 18.5642 53.7467 18.7652 52.4436 18.5064C51.1405 18.2476 49.9675 17.5449 49.1244 16.5181C48.2814 15.4913 47.8205 14.204 47.8202 12.8754C47.8179 12.1214 47.9652 11.3744 48.2535 10.6777C48.5418 9.98093 48.9654 9.34828 49.4998 8.81632ZM7.30859 10.0311H14.623V17.3456H7.30859V10.0311Z"
                                    fill="black"
                                />
                                <path
                                    d="M103.381 70.2189H70.4141L72.3863 57.2458C72.4399 56.899 72.3783 56.5442 72.211 56.2358L55.1809 24.0718C55.0376 23.8039 54.8242 23.5801 54.5634 23.4243C54.3026 23.2685 54.0044 23.1866 53.7006 23.1875C53.3968 23.1884 53.099 23.2719 52.8392 23.4292C52.5793 23.5864 52.3671 23.8115 52.2254 24.0802L35.1953 56.2569C35.0255 56.562 34.9645 56.9157 35.0222 57.26L37.1098 70.2189H4.02545C3.56667 70.2368 3.132 70.4291 2.81007 70.7564C2.48814 71.0838 2.30321 71.5216 2.29297 71.9806V101.537C2.30555 101.99 2.49308 102.42 2.81615 102.737C3.13923 103.054 3.57269 103.234 4.02545 103.238H103.381C103.834 103.234 104.267 103.054 104.59 102.737C104.913 102.42 105.101 101.99 105.113 101.537V71.9806C105.103 71.5216 104.918 71.0838 104.596 70.7564C104.274 70.4291 103.84 70.2368 103.381 70.2189ZM53.7031 46.4887C54.1718 46.4887 54.63 46.6277 55.0198 46.8881C55.4095 47.1485 55.7132 47.5187 55.8926 47.9517C56.072 48.3847 56.1189 48.8612 56.0275 49.321C55.936 49.7807 55.7103 50.2029 55.3789 50.5344C55.0475 50.8658 54.6252 51.0915 54.1655 51.183C53.7057 51.2744 53.2292 51.2275 52.7962 51.0481C52.3632 50.8687 51.993 50.565 51.7326 50.1752C51.4722 49.7855 51.3332 49.3273 51.3332 48.8586C51.334 48.2303 51.5839 47.6279 52.0282 47.1836C52.4724 46.7394 53.0748 46.4894 53.7031 46.4887ZM52.0312 31.5986V43.3962C50.7223 43.7967 49.6006 44.6539 48.8704 45.8118C48.1401 46.9696 47.8499 48.3511 48.0524 49.705C48.2549 51.0588 48.9367 52.2949 49.9738 53.1884C51.0108 54.0819 52.3342 54.5734 53.7031 54.5734C55.072 54.5734 56.3954 54.0819 57.4325 53.1884C58.4696 52.2949 59.1514 51.0588 59.3539 49.705C59.5564 48.3511 59.2661 46.9696 58.5359 45.8118C57.8056 44.6539 56.684 43.7967 55.375 43.3962V31.5986L68.9976 57.2909L67.0324 70.2189H40.497L38.4124 57.2828L52.0312 31.5986ZM101.77 99.8947H94.6641V95.1507C94.6641 94.7073 94.4879 94.2821 94.1744 93.9686C93.8608 93.655 93.4356 93.4789 92.9922 93.4789C92.5488 93.4789 92.1235 93.655 91.81 93.9686C91.4965 94.2821 91.3203 94.7073 91.3203 95.1507V99.8947H85.8867V91.6565C85.8867 91.2131 85.7106 90.7879 85.397 90.4743C85.0835 90.1608 84.6582 89.9846 84.2148 89.9846C83.7714 89.9846 83.3462 90.1608 83.0326 90.4743C82.7191 90.7879 82.543 91.2131 82.543 91.6565V99.8947H77.1094V95.1507C77.1094 94.7073 76.9332 94.2821 76.6197 93.9686C76.3062 93.655 75.8809 93.4789 75.4375 93.4789C74.9941 93.4789 74.5688 93.655 74.2553 93.9686C73.9418 94.2821 73.7656 94.7073 73.7656 95.1507V99.8947H68.541V91.6565C68.541 91.2131 68.3649 90.7879 68.0513 90.4743C67.7378 90.1608 67.3125 89.9846 66.8691 89.9846C66.4257 89.9846 66.0005 90.1608 65.6869 90.4743C65.3734 90.7879 65.1973 91.2131 65.1973 91.6565V99.8947H59.7637V95.1507C59.7637 94.7073 59.5875 94.2821 59.274 93.9686C58.9605 93.655 58.5352 93.4789 58.0918 93.4789C57.6484 93.4789 57.2231 93.655 56.9096 93.9686C56.5961 94.2821 56.4199 94.7073 56.4199 95.1507V99.8947H50.9863V91.6565C50.9863 91.2131 50.8102 90.7879 50.4966 90.4743C50.1831 90.1608 49.7579 89.9846 49.3145 89.9846C48.871 89.9846 48.4458 90.1608 48.1323 90.4743C47.8187 90.7879 47.6426 91.2131 47.6426 91.6565V99.8947H42.209V95.1507C42.209 94.7073 42.0328 94.2821 41.7193 93.9686C41.4058 93.655 40.9805 93.4789 40.5371 93.4789C40.0937 93.4789 39.6685 93.655 39.3549 93.9686C39.0414 94.2821 38.8652 94.7073 38.8652 95.1507V99.8947H33.6406V91.6565C33.6406 91.2131 33.4645 90.7879 33.1509 90.4743C32.8374 90.1608 32.4122 89.9846 31.9688 89.9846C31.5253 89.9846 31.1001 90.1608 30.7866 90.4743C30.473 90.7879 30.2969 91.2131 30.2969 91.6565V99.8947H24.8633V95.1507C24.8633 94.7073 24.6871 94.2821 24.3736 93.9686C24.0601 93.655 23.6348 93.4789 23.1914 93.4789C22.748 93.4789 22.3228 93.655 22.0092 93.9686C21.6957 94.2821 21.5195 94.7073 21.5195 95.1507V99.8947H16.0859V91.6565C16.0859 91.2131 15.9098 90.7879 15.5963 90.4743C15.2827 90.1608 14.8575 89.9846 14.4141 89.9846C13.9707 89.9846 13.5454 90.1608 13.2319 90.4743C12.9183 90.7879 12.7422 91.2131 12.7422 91.6565V99.8947H5.63672V82.549H101.77V99.8947ZM101.77 79.2052H5.63672V73.5627H101.77V79.2052Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Creatives
                        </h2>
                    </div>

                    <div className="drop-shadow-glow filter bg-domain_bg rounded-xl p-6 shadow-lg text-white h-[200px] w-[200px] sm:w-[250px] sm:h-[250px] flex flex-col justify-center items-center">
                        <div>
                            <svg
                                width="101"
                                height="101"
                                viewBox="0 0 101 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M98.1372 36.2143C98.1372 54.8342 83.0428 69.9286 64.4229 69.9286C45.803 69.9286 30.7086 54.8342 30.7086 36.2143C30.7086 17.5944 45.803 2.5 64.4229 2.5C83.0428 2.5 98.1372 17.5944 98.1372 36.2143Z"
                                    stroke="#0DFF4E"
                                    stroke-width="4"
                                />
                                <circle
                                    cx="36.1711"
                                    cy="64.7856"
                                    r="33.7143"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="4"
                                />
                                <path
                                    d="M35.4948 85.8223C34.6497 85.8223 33.9357 85.5243 33.3528 84.9283C32.77 84.3322 32.4786 83.5872 32.4786 82.6931V79.385L33.79 80.592C31.8374 80.5026 30.1471 80.2493 28.7191 79.832C27.2911 79.4148 26.1254 78.9976 25.222 78.5803C24.4642 78.2227 23.9251 77.7161 23.6045 77.0604C23.3131 76.4048 23.1965 75.7342 23.2548 75.0488C23.3422 74.3633 23.59 73.7374 23.998 73.1712C24.406 72.6049 24.9305 72.2324 25.5717 72.0536C26.242 71.845 27.0142 71.9344 27.8885 72.3218C28.4714 72.6497 29.3457 72.9924 30.5114 73.35C31.7063 73.6778 33.178 73.8418 34.9266 73.8418C36.1506 73.8418 37.1123 73.7225 37.8117 73.4841C38.5403 73.2457 39.0503 72.9328 39.3417 72.5453C39.6623 72.1281 39.8226 71.6811 39.8226 71.2042C39.8226 70.7572 39.706 70.3847 39.4729 70.0866C39.2689 69.7588 38.9191 69.4757 38.4237 69.2373C37.9283 68.969 37.2434 68.7306 36.3691 68.522L31.4294 67.4491C28.7191 66.8233 26.6937 65.7802 25.3531 64.3199C24.0417 62.8297 23.3859 60.9075 23.3859 58.5531C23.3859 56.7649 23.8085 55.1705 24.6537 53.7698C25.528 52.3393 26.7374 51.177 28.282 50.2829C29.8557 49.3888 31.6917 48.8226 33.79 48.5842L32.4786 49.3441V46.349C32.4786 45.4549 32.77 44.7099 33.3528 44.1138C33.9357 43.5178 34.6497 43.2197 35.4948 43.2197C36.3691 43.2197 37.0977 43.5178 37.6806 44.1138C38.2634 44.7099 38.5549 45.4549 38.5549 46.349V49.3441L37.2434 48.4948C38.3509 48.5246 39.5457 48.7183 40.828 49.0759C42.1103 49.4037 43.2323 49.8657 44.194 50.4617C44.8643 50.8194 45.3306 51.3111 45.5929 51.9369C45.8843 52.5628 45.9863 53.2036 45.8989 53.8592C45.8406 54.4851 45.6075 55.0513 45.1995 55.5579C44.8206 56.0646 44.296 56.4073 43.6257 56.5861C42.9846 56.7351 42.2123 56.6159 41.3089 56.2285C40.6386 55.9305 39.8809 55.6921 39.0357 55.5132C38.2197 55.3046 37.1706 55.2003 35.8883 55.2003C34.3437 55.2003 33.1488 55.4834 32.3037 56.0497C31.4877 56.6159 31.0797 57.3461 31.0797 58.2402C31.0797 58.8362 31.3128 59.3429 31.7791 59.7601C32.2746 60.1475 33.1634 60.4903 34.4457 60.7883L39.4291 61.9059C42.1977 62.5317 44.2377 63.5748 45.5492 65.0351C46.8897 66.4656 47.56 68.3283 47.56 70.6231C47.56 72.4112 47.1375 73.9908 46.2923 75.3617C45.4472 76.7326 44.2669 77.8502 42.7514 78.7145C41.2652 79.5787 39.5312 80.145 37.5494 80.4132L38.5549 79.3403V82.6931C38.5549 83.5872 38.2634 84.3322 37.6806 84.9283C37.1269 85.5243 36.3983 85.8223 35.4948 85.8223Z"
                                    fill="#0DFF4E"
                                />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Corporate
                        </h2>
                    </div>
                </div>
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="bg-bg_black border-[2px] border-bright_green rounded-xl p-6 w-[70vw] h-[70vw] max-w-[250px] max-h-[250px] flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 relative">
                    {/* <button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-red-500 text-white  px-1 rounded-sm h-7 hover:bg-red-600"
            aria-label="Close"
          >
            &times;
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="text-bright_green">
            {domain}
          </Typography>
          <Typography id="modal-modal-description" className="text-white mt-2">
            {domain === 'Technical' && 'This domain enhances your coding skills, dealing with Web dev, App dev, and blockchain.'}
            {domain === 'Creatives' && 'Creatives focus on artistic design, including graphic design, visual arts, and multimedia projects.'}
            {domain === 'Corporate' && 'Corporate domains are centered around business operations, management, and organizational strategies.'}
            {domain === 'Content' && 'Content involves creating and managing written material for various platforms, including blogs, articles, and social media.'}
          </Typography> */}
                </Box>
            </Modal>

            <style jsx>{`
                .domain-box {
                    justify-content: center;
                    padding: 10px;
                }
                .drop-shadow-glow {
                    box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.2);
                    transition: box-shadow 0.3s ease-in-out;
                }

                .drop-shadow-glow:hover {
                    box-shadow: 0px 0px 30px 10px rgba(13, 255, 78, 1);
                    transition: box-shadow 0.3s ease;
                }
            `}</style>
        </div>
    );
}

export default Domains;
