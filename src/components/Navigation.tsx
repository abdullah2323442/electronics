export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item has-dropdown">
            <span>Desktop</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Desktop Offer</li>
                <li className="has-caret">Star PC <span className="caret"></span></li>
                <li className="has-caret">Gaming PC <span className="caret"></span></li>
                <li className="has-caret">Brand PC <span className="caret"></span></li>
                <li className="has-caret">All-in-One PC <span className="caret"></span></li>
                <li>AI PC</li>
                <li className="has-caret">Portable Mini PC <span className="caret"></span></li>
                <li>Apple Mac Mini</li>
                <li>Apple iMac</li>
                <li>Apple Mac Studio</li>
                <li>Apple Mac Pro</li>
                <li className="show-all">Show All Desktop</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Laptop</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Laptop Offer</li>
                <li className="has-caret">All Laptops <span className="caret"></span></li>
                <li className="has-caret">Gaming Laptop <span className="caret"></span></li>
                <li className="has-caret">Premium Ultrabook <span className="caret"></span></li>
                <li>Business Laptop</li>
                <li>Student Laptop</li>
                <li>Apple MacBook</li>
                <li>Microsoft Surface</li>
                <li className="show-all">Show All Laptop</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Component</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Processor</li>
                <li>Motherboard</li>
                <li>RAM (Desktop)</li>
                <li>Graphics Card</li>
                <li>SSD</li>
                <li>Casing</li>
                <li>Power Supply</li>
                <li>CPU Cooler</li>
                <li className="show-all">Show All Component</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Monitor</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Value Series</li>
                <li>Gaming Monitor</li>
                <li>4K Monitor</li>
                <li>Curved Monitor</li>
                <li>Touch Monitor</li>
                <li className="show-all">Show All Monitor</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Tablet</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Apple iPad</li>
                <li>Samsung Tablet</li>
                <li>Graphics Tablet</li>
                <li>Microsoft Surface</li>
                <li className="show-all">Show All Tablet</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Phone</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Apple iPhone</li>
                <li>Samsung</li>
                <li>Google Pixel</li>
                <li>Xiaomi</li>
                <li>OnePlus</li>
                <li className="show-all">Show All Phone</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Power</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Online UPS</li>
                <li>Offline UPS</li>
                <li>Voltage Stabilizer</li>
                <li>Surge Protector</li>
                <li>Power Bank</li>
                <li className="show-all">Show All Power</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Office Equipment</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Printer</li>
                <li>Scanner</li>
                <li>Photocopier</li>
                <li>Projector</li>
                <li>Paper Shredder</li>
                <li>Money Counting Machine</li>
                <li className="show-all">Show All Office</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Camera</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>DSLR Camera</li>
                <li>Mirrorless Camera</li>
                <li>Instant Camera</li>
                <li>Action Camera</li>
                <li>Camera Lens</li>
                <li>Camera Accessories</li>
                <li className="show-all">Show All Camera</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Security</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>IP Camera</li>
                <li>CC Camera</li>
                <li>DVR / NVR</li>
                <li>Access Control</li>
                <li>Smart Door Lock</li>
                <li className="show-all">Show All Security</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Networking</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Router</li>
                <li>Network Switch</li>
                <li>LAN Card</li>
                <li>Access Point</li>
                <li>Network Cable</li>
                <li className="show-all">Show All Networking</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Software</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Operating System</li>
                <li>Office Application</li>
                <li>Antivirus</li>
                <li>Server Software</li>
                <li>Design Software</li>
                <li className="show-all">Show All Software</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Server & Storage</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Server Rack</li>
                <li>NAS Storage</li>
                <li>Server Motherboard</li>
                <li>Workstation</li>
                <li>Server Processor</li>
                <li className="show-all">Show All Server</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Accessories</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Keyboard</li>
                <li>Mouse</li>
                <li>Headphone</li>
                <li>Bluetooth Speaker</li>
                <li>USB Hub</li>
                <li>Cable & Converter</li>
                <li className="show-all">Show All Accessories</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Gadget</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Smart Watch</li>
                <li>Earbuds</li>
                <li>Smart Band</li>
                <li>Power Bank</li>
                <li>Gimbal</li>
                <li className="show-all">Show All Gadget</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Gaming</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Gaming Chair</li>
                <li>Gaming Desk</li>
                <li>Gaming Console</li>
                <li>VR Headset</li>
                <li>Gaming Controller</li>
                <li className="show-all">Show All Gaming</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>TV</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Samsung TV</li>
                <li>Sony TV</li>
                <li>LG TV</li>
                <li>Android TV</li>
                <li>4K UHD TV</li>
                <li className="show-all">Show All TV</li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <span>Appliance</span>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li>Air Conditioner</li>
                <li>Refrigerator</li>
                <li>Washing Machine</li>
                <li>Microwave Oven</li>
                <li>Water Purifier</li>
                <li className="show-all">Show All Appliance</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
