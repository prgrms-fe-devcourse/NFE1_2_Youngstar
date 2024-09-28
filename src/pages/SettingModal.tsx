import "../styles/scss/Setting.scss";

const SettingModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="settingContainer">
            <div className="setting-content">
                <p>모달 1차 테스트</p>
                <button onClick={onClose}>수정</button>
            </div>                
        </div>
    );
};

export default SettingModal;