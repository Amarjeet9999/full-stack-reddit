import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LinkIcon from "@mui/icons-material/Link";
import PoolIcon from "@mui/icons-material/Pool";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import CodeIcon from "@mui/icons-material/Code";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Post.module.css";
import { storage } from "./firebase";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ title: "" });
  const [image, setImage] = useState(null);
  const [state, setState] = useState(false);
  const [url, setUrl] = useState("");
  console.log("url:", url);

  const userId = useSelector((state) => state.auth.user._id);
  console.log(userId);
  const token = useSelector((state) => state.auth.token);
  // console.log("userId:", userId);

  const handleImage = (e) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };

  const handleUpload1 = () => {
    setState(true);
    const uploadTask = storage.ref(`img/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progresss1 = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // if (progresss1 > 5454545) console.log("waiting time");
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("img")
          .child(image.name)
          .getDownloadURL()
          .then((url1) => {
            // setProgress1(100);
            setUrl(url1);
            setState(false);
          });
      }
    );
  };

  useEffect(() => {
    if (image) {
      handleUpload1();
    }
  }, [image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.title?.trim()) {
      return;
    }
    const payload = {
      ...formData,
      postedBy: userId,
    };
    if (url) {
      payload.img = url;
    }
    // console.log(payload);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("http://localhost:8000/posts", payload, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // setTimeout(() => {
    return history.push("/app");
    // }, 3000);
  };

  return (
    <>
      {/* <div className="formTitle">Create a post</div> */}

      <div className={styles.formDiv}>
        <div className={styles.options}>
          <button className={styles.optBtn}>
            <div className={styles.khaskhsakhas}>
              <PostAddIcon />
              <span className={styles.spantext}>Post</span>
            </div>
          </button>
          <button className={styles.optBtn}>
            <PermMediaIcon />
            <span className={styles.spantext}>Images and Videos</span>
          </button>
          <button className={styles.optBtn}>
            <LinkIcon />
            <span className={styles.spantext}>Link</span>
          </button>
          <button className={styles.optBtn}>
            <PoolIcon />
            <span className={styles.spantext}>Pool</span>
          </button>
        </div>
        <div className="textArea">
          <div className={styles.textinput}>
            <input
              maxLength="300"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              className={styles.textareafirst}
            ></input>
          </div>
          <div className={styles.textinputbigbox}>
            <div className={styles.otherstuff}>
              <div className={styles.otherstuffunder}>
                <div className={styles.otherstuffunderextra}>
                  <FormatBoldIcon />
                  <FormatItalicIcon />
                  <LinkIcon />
                  <StrikethroughSIcon />
                  <CodeIcon />
                  <SuperscriptIcon />
                  <ReportGmailerrorredIcon />
                </div>
                <div className={styles.otherstuffunderextratwo}>
                  <FormatListBulletedIcon />
                  <FormatListNumberedIcon />
                  <FormatQuoteIcon />
                  <CodeIcon />
                </div>
                <div className={styles.otherstuffunderextrathree}>
                  <BackupTableIcon />

                  <PermMediaIcon />

                  <OndemandVideoIcon />
                </div>
                <div></div>
              </div>
            </div>
            <textarea
              placeholder="Text (optional)"
              name="text"
              value={formData.text}
              onChange={(e) => handleChange(e)}
              className={styles.textareasecond}
            ></textarea>
          </div>
        </div>
        <div className={styles.postcommunity}>
          <div className={styles.postcommunityunderdiv}>
            <span className={styles.postname}>Post to</span>
            <div className={styles.postcommunityunderdivextra}>
              <div className={styles.logo}>
                <i className={styles.searchiconcolor}>
                  <SearchIcon />
                </i>
                <input
                  className={styles.inputtag}
                  name="community"
                  value={formData.community}
                  onChange={(e) => handleChange(e)}
                  placeholder="Search Communities "
                ></input>
              </div>

              <div className={styles.ashjahajshgas}>
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageupload}>
          <div className={styles.imageuploadunder}>
            <form>
              <label className={styles.imageuploadundertext} htmlFor="img">
                Select image:{" "}
              </label>{" "}
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={(e) => handleImage(e)}
              />
              <button className="assasasasa">Upload</button>
            </form>
          </div>
        </div>

        <div className={styles.othercommunities}>
          <div className={styles.othercommunitiessaassasa}>
            <div className={styles.otherstuffasaasaasasasss}>
              <div className={styles.roundcircle}>
                <AddIcon />
                <strong className={styles.strongssss}>OC</strong>
              </div>
              <div className={styles.roundcircle}>
                <AddIcon />
                <strong className={styles.strongssss}>SPOILER</strong>
              </div>
            </div>
            <div className={styles.otherstuffasaasaasasasss}>
              <div className={styles.roundcircle}>
                <AddIcon />
                <strong className={styles.strongssss}>NSFW</strong>
              </div>
              <div className={styles.roundcircle}>
                <AddIcon />
                <strong className={styles.strongssss}>FLAIR</strong>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className={styles.finalcommunity}>
          <div className={styles.finalcommunityunder}>
            <div className={styles.pixelgiven}></div>
            <div className={styles.pixelgiven}></div>
            <div className={styles.pixelgiven}>
              <div className={styles.roundcirclesecondbutton}>
                <button className={styles.strongssssffff}>
                  <strong>SAVE DRAFT</strong>
                </button>
              </div>
              <div className={styles.roundcirclesecond}>
                <button
                  disabled={state}
                  onClick={handleSubmit}
                  className={styles.strongssssffffss}
                >
                  <strong>{state ? "uploading..." : "POST"}</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
