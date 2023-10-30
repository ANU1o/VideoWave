import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getAllVideos } from "../services/alllAPIs";
import VCard from "./VCard";
import { Masonry } from "react-masonry/dist";
import { useNavigate } from "react-router-dom";

const View = ({ updatedState }) => {
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const [deleteUpdate, setDeleteUpdate] = useState({});
  const fetchVideo = async () => {
    const result = await getAllVideos();
    if (result.status >= 200 && result.status < 300) {
      setVideo(result.data);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [updatedState, deleteUpdate]);

  // console.log(video);
  return (
    <div className="bg-bg p-3 rounded mb-3">
      <Button
        variant="primary"
        className="mb-3 me-2"
        onClick={() => navigate("/History")}
      >
        <i class="fa-solid fa-clock me-2"></i>View Watch History
      </Button>

      <Masonry className="row row-cols-1">
        {video.length > 0 ? (
          video
            .toReversed()
            .map((i) => (
              <VCard
                caption={i.caption}
                img={i.coverImg}
                url={i.videoURL}
                vid={i.id}
                deleteStatus={setDeleteUpdate}
                del={true}
              />
            ))
        ) : (
          <h1 className="text-center text-secondary text-uppercase">
            It's empty here
          </h1>
        )}
      </Masonry>
    </div>
  );
};

export default View;
