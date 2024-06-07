import axios from "axios";
import { CSVLink } from "react-csv";
import { __ } from "@wordpress/i18n";
import Dialog from "@mui/material/Dialog";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Popoup from "../PopupContent/PopupContent";
import CustomTable, {
  TableCell,
} from "../AdminLibrary/CustomTable/CustomTable";
import './quoteRequests.scss';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function QuotesList() {
  const fetchQuotesDataUrl = `${appLocalizer.apiUrl}/catalog/v1/get-quotes-list`;
  // const fetchQuotesCount = `${appLocalizer.apiUrl}/catalog/v1/get-table-segment`;
  const [postStatus, setPostStatus] = useState("");
  const [data, setData] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalRows, setTotalRows] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [subscribersStatus, setSubscribersStatus] = useState(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleDateOpen = () => {
    setOpenDatePicker(!openDatePicker);
  }

  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  function requestData(
    rowsPerPage = 10,
    currentPage = 1,
    productNameField = "",
    statusField = "",
    start_date = new Date(0),
    end_date = new Date(),
    postStatus
  ) {
    //Fetch the data to show in the table
    axios({
      method: "post",
      url: fetchQuotesDataUrl,
      headers: { "X-WP-Nonce": appLocalizer.nonce },
      data: {
        page: currentPage,
        row: rowsPerPage,
        postStatus: postStatus,
        product_name: productNameField,
        status: statusField,
        start_date: start_date,
        end_date: end_date,
      },
    }).then((response) => {
      const data = JSON.parse(response.data);
      setData(data);
    });
  }

  const requestApiForData = (rowsPerPage, currentPage, filterData = {}) => {
    requestData(
      rowsPerPage,
      currentPage,
      filterData?.productNameField,
      filterData?.statusField,
      filterData?.date?.start_date,
      filterData?.date?.end_date,
      filterData.typeCount
    );
  };

  const filterForCSV = (datas) => {
    if (selectedRows.length) {
      datas = selectedRows;
    }
    return datas.map(({ order, date, status, total }) => { return { order, date, status, total } });
  }

  useEffect(() => {
    if (appLocalizer.pro_active) {
      requestData();
    }
  }, [postStatus]);

  const dateRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (!dateRef?.current?.contains(event.target)) {
        setOpenDatePicker(false);
      }
    })
  }, [])

  const realtimeFilter = [
    {
      name: "productNameField",
      render: (updateFilter, filterValue) => {
        const [inputValue, setInputValue] = useState('');
        const [suggestions, setSuggestions] = useState([]);

        const handleChange = async (e) => {
          const { value } = e.target;
          setInputValue(value);

          // Fetch suggestions when input length is greater than or equal to 2
          if (value.length >= 2) {
            const response = await axios.get(`${appLocalizer.apiUrl}/catalog/v1/customer-names`);
            // Here, you can fetch suggestions from an API or use a predefined list
            // For simplicity, I'll just set some dummy suggestions
            // const dummySuggestions = ['Apple', 'Banana', 'Orange', 'Pineapple'];
            // setSuggestions(dummySuggestions.filter(suggestion =>
            //   suggestion.toLowerCase().includes(value.toLowerCase())
            // ));
            console.log(response);
            setSuggestions(response.data);
          } else {
            // Clear suggestions when input length is less than 2
            setSuggestions([]);
          }

          // Update filter value
          updateFilter("productNameField", value);
        };

        return (
          <>
            <div className="admin-header-search-section">
              <input
                name="productNameField"
                type="text"
                placeholder={__(
                  "Search by Customer Name",
                  "woocommerce-catalog-enquiry"
                )}
                onChange={handleChange}
                value={inputValue}
              />
            </div>
            {/* Render suggestion box below the input field */}
            {suggestions.length > 0 && (
              <div className="suggestion-box">
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      },
    },
    {
      name: "statusField",
      render: (updateFilter, filterValue) => (
        <>
          <div className="admin-header-search-section">
            <select
              name="statusField"
              placeholder={__("All Statuses", "woocommerce-catalog-enquiry")}
              onChange={(e) => updateFilter(e.target.name, e.target.value)}
              value={filterValue || ""}
            >
              <option value="">All statuses</option>
              <option value="wc-quote-new">New Quote Request</option>
              <option value="wc-quote-expired">Expired Quote</option>
              <option value="wc-quote-rejected">Rejected Quote</option>
            </select>
          </div>
        </>
      ),
    },
    {
      name: "date",
      render: (updateFilter, value) => (
        <div ref={dateRef}>
          <div className="admin-header-search-section">
            <input value={`${selectedRange[0].startDate.toLocaleDateString()} - ${selectedRange[0].endDate.toLocaleDateString()}`} onClick={() => handleDateOpen()} className="date-picker-input-custom" type="text" placeholder={__("DD/MM/YYYY", "woocommerce-catalog-enquiry")} />
          </div>
          {openDatePicker &&
            <div className="date-picker-section-wrapper">
              <DateRangePicker
                ranges={selectedRange}
                months={1}
                direction="vertical"
                scroll={{ enabled: true }}
                maxDate={new Date()}
                shouldDisableDate={date => isAfter(date, new Date())}
                onChange={(dates) => {
                  if (dates.selection) {
                    dates = dates.selection;
                    dates.endDate?.setHours(23, 59, 59, 999)
                    setSelectedRange([dates])
                    updateFilter("date", {
                      start_date: dates.startDate,
                      end_date: dates.endDate,
                    });
                  }
                }}
              />
            </div>
          }
        </div>
      ),
    },
  ];

  //columns for the data table
  const columns = [
    {
      name: __("Order", "woocommerce-catalog-enquiry"),
      cell: (row) =>
        <TableCell title="Order" >
          <p>{row.order}</p>
        </TableCell>,
    },
    {
      name: __("Date", "woocommerce-catalog-enquiry"),
      cell: (row) =>
        <TableCell title="Date">
          {row.date}
        </TableCell>,
    },
    {
      name: __("Status", "woocommerce-catalog-enquiry"),
      cell: (row) => <TableCell title="Status" > {row.status} </TableCell>,
    },
    {
      name: __("Total", "woocommerce-catalog-enquiry"),
      cell: (row) => <TableCell title="Total" > {row.total} </TableCell>,
    },
  ];

  return (
    <div>
      {!appLocalizer.pro_active ? (
        <div>
          <Dialog
            className="admin-module-popup"
            open={openDialog}
            onClose={() => {
              setOpenDialog(false);
            }}
            aria-labelledby="form-dialog-title"
          >
            <span
              className="admin-font font-cross stock-manager-popup-cross"
              onClick={() => {
                setOpenDialog(false);
              }}
            ></span>
            <Popoup />
          </Dialog>
          <div
            className="subscriber-img"
            onClick={() => {
              setOpenDialog(true);
            }}>
          </div>
        </div>
      ) : (
        <div className="admin-subscriber-list">
          <div className="admin-page-title">
            <p>{__("Quotes List", "woocommerce-catalog-enquiry")}</p>
            <div className="download-btn-subscriber-list">
              <CSVLink
                data={filterForCSV(data || [])}
                filename={"Quotes.csv"}
                className="admin-btn btn-purple"
              >
                <div className="wp-menu-image dashicons-before dashicons-download"></div>
                {__("Download CSV", "woocommerce-catalog-enquiry")}
              </CSVLink>
            </div>
          </div>

          {
            <CustomTable
              data={data}
              columns={columns}
              selectable={true}
              handleSelect={(selectRows) => {
                setSelectedRows(selectRows);
              }}
              handlePagination={requestApiForData}
              defaultRowsParPage={10}
              defaultTotalRows={totalRows}
              perPageOption={[10, 25, 50]}
              realtimeFilter={realtimeFilter}
              typeCounts={subscribersStatus}
            />
          }
        </div>
      )}
    </div>
  );
}