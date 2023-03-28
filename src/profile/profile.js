import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession, children, handleName } = props;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={children} alt="profile" style={styles.image} />
        <h2 onClick={() => handleName(fullName)} style={styles.name}>
          {fullName}
        </h2>
        <p style={styles.profession}>{profession}</p>
        <p style={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "username",
  bio: "bio",
  profession: "fullstack developer",
  children: "hhhh",
  handleName: () => alert("Profile user's name is not available."),
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    width: "300px",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  name: {
    color: "green",
    cursor: "pointer",
  },
  profession: {
    color: "gray",
    fontStyle: "italic",
  },
  bio: {
    fontWeight: "bold",
  },
};

export default Profile;
