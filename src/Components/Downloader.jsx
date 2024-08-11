import React, { useState } from 'react';
// import Button from './button.png';

function Downloader() {
  const [videoLink, setVideoLink] = useState('');
  const [downloadLink, setDownloadLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleDownload = async () => {
    if (!videoLink) {
      alert("Please enter a valid Instagram video link.");
      return;
    }

    setLoading(true);
    try {
      const formData = new URLSearchParams();
      formData.append('url', videoLink);

      console.log("Request body:", formData.toString());

      const response = await fetch('https://all-media-downloader.p.rapidapi.com/download', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '869459dademshc551813638bd05ap166a34jsn622644aeac47', // Replace with your API key
          'x-rapidapi-host': 'all-media-downloader.p.rapidapi.com',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (response.ok) {
        const result = await response.json(); // Parse JSON response
        console.log("Response data:", result);

        if (Array.isArray(result) && result.length > 0) {
          setDownloadLink(result[0]); // Assuming the URL is in the first item of the array
        } else {
          alert("Failed to get the download link. Please try again.");
        }
      } else {
        const errorText = await response.text(); // Get response text for error details
        console.error("API response error:", errorText);
        alert("Failed to fetch video. Check your API key or endpoint.");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      alert("Error fetching video. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-center'>
      <div>
      <h1 className=' relative -top-20 font-sans font-bold text-4xl text-pink-700'>Deo<span className='font-mono text-6xl text-orange-700'>Clip</span><span className=' font-sans '>Catcher</span></h1>

      </div>
     
      <input
        type="text"
        placeholder="Enter Video Link............."
        value={videoLink}
        onChange={handleInputChange}
        className='relative md:left-12 p-2 font-bold focus:outline-none rounded-lg text-pink-700 shadow-xl shadow-cyan-700 w-80 bg-transparent'
      
      />
     
      <button onClick={handleDownload} disabled={loading} className='relative top-6 md:top-0 md:left-20  text-pink-700 font-medium shadow-xl bg-transparent rounded-xl p-1 pl-2 pr-2 z-50 shadow-cyan-700  '>
        {loading ? 'Processing...' : 'Search Video'}
      </button>

      {downloadLink && (
        <div>
          <a href={downloadLink} download>
            <button className='relative top-12 w-44 h-10 text-pink-700 shadow-xl shadow-cyan-700 rounded-xl '> <i className="fi fi-sr-laptop-arrow-down text-orange-700 relative top-1 "></i> Download Video</button>
          </a>
        
        </div>
      )}
    </div>
  );
}

export default Downloader;
