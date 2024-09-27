import useFetchUsers from "../hooks/useFetchUsers";

const MyPage = () => {
    const { data } = useFetchUsers();
    return (
        <>
            <div>Mypage</div>
            {/* {data && (<div>{data[0].email}</div>)} */}
        </>
    );
}

export default MyPage;
