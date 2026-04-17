import { useState } from "react";

import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    searchDev: ""
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {/* Header Sederhana agar tidak sepi */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Explore Frameworks
        </h1>
        <p className="mt-2 text-gray-500">
          Modern tools for modern developers.
        </p>
      </div>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />
      <input
        type="text"
        name="searchDev"
        placeholder="Developer"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:rotate-1 hover:shadow-xl hover:ring-indigo-300"
          >
            <div>
              {/* Header Card */}
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  EST. {item.releaseYear}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>

              {/* Tags Section */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-600 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Card */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="text-xs">
                <p className="text-gray-400">Developed By</p>
                <p className="font-semibold text-gray-700">
                  {item.details.developer}
                </p>
              </div>

              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-indigo-600 active:scale-95"
              >
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
