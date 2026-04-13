"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AccountPage() {
  const [tab, setTab] = useState("dashboard");

  const orders = [
    { id: "#FM-2024-0847", date: "Mar 15, 2024", items: 3, status: "Processing", statusColor: "warning", total: "$32.49" },
    { id: "#FM-2024-0832", date: "Mar 10, 2024", items: 5, status: "Shipped", statusColor: "info", total: "$67.25" },
    { id: "#FM-2024-0815", date: "Mar 5, 2024", items: 2, status: "Delivered", statusColor: "success", total: "$45.80" },
    { id: "#FM-2024-0798", date: "Feb 28, 2024", items: 1, status: "Delivered", statusColor: "success", total: "$23.99" },
  ];

  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">My Account</li></ol></nav></div>
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="display-6 fw-bold mb-4">My Account</h2>
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 text-center">
                  <Image src="/images/reviewer-1.jpg" alt="Profile" width={100} height={100} className="rounded-circle mb-3" style={{ objectFit: "cover" }} />
                  <h5 className="fw-bold mb-1">John Smith</h5>
                  <p className="text-muted small">john.smith@email.com</p>
                </div>
                <div className="list-group list-group-flush rounded-bottom-4">
                  {[["dashboard", "Dashboard"], ["orders", "My Orders"], ["addresses", "Addresses"], ["details", "Account Details"]].map(([key, label]) => (
                    <button key={key} className={`list-group-item list-group-item-action ${tab === key ? "active" : ""}`} onClick={() => setTab(key)}>{label}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {tab === "dashboard" && (
                <>
                  <div className="card border-0 shadow-sm rounded-4 mb-4"><div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Dashboard</h5>
                    <p className="text-muted">Hello <strong>John</strong>, welcome to your account dashboard.</p>
                    <div className="row g-3 mt-2">
                      {[["12", "Total Orders", "bg-primary-subtle"], ["3", "Pending", "bg-success-subtle"], ["8", "Wishlist", "bg-info-subtle"]].map(([num, label, bg], i) => (
                        <div className="col-md-4" key={i}><div className={`card ${bg} border-0 rounded-3 p-3 text-center`}><h3 className="fw-bold mb-0">{num}</h3><small className="text-muted">{label}</small></div></div>
                      ))}
                    </div>
                  </div></div>
                  <div className="card border-0 shadow-sm rounded-4"><div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Recent Orders</h5>
                    <div className="table-responsive"><table className="table"><thead className="table-light"><tr><th>Order</th><th>Date</th><th>Status</th><th>Total</th><th></th></tr></thead><tbody>
                      {orders.slice(0, 3).map((o, i) => (
                        <tr key={i}><td>{o.id}</td><td>{o.date}</td><td><span className={`badge bg-${o.statusColor} ${o.statusColor === "warning" ? "text-dark" : ""}`}>{o.status}</span></td><td>{o.total}</td><td><button className="btn btn-sm btn-outline-dark">View</button></td></tr>
                      ))}
                    </tbody></table></div>
                  </div></div>
                </>
              )}
              {tab === "orders" && (
                <div className="card border-0 shadow-sm rounded-4"><div className="card-body p-4">
                  <h5 className="fw-bold mb-3">My Orders</h5>
                  <div className="table-responsive"><table className="table"><thead className="table-light"><tr><th>Order</th><th>Date</th><th>Items</th><th>Status</th><th>Total</th></tr></thead><tbody>
                    {orders.map((o, i) => (
                      <tr key={i}><td>{o.id}</td><td>{o.date}</td><td>{o.items} items</td><td><span className={`badge bg-${o.statusColor} ${o.statusColor === "warning" ? "text-dark" : ""}`}>{o.status}</span></td><td>{o.total}</td></tr>
                    ))}
                  </tbody></table></div>
                </div></div>
              )}
              {tab === "addresses" && (
                <div className="card border-0 shadow-sm rounded-4"><div className="card-body p-4">
                  <h5 className="fw-bold mb-3">My Addresses</h5>
                  <div className="row g-4">
                    {[["Shipping Address", "123 Grocery Lane\nFresh City, FC 10001", true], ["Billing Address", "456 Market Street\nCommerce Town, CT 20002", false]].map(([title, addr, isDefault], i) => (
                      <div className="col-md-6" key={i}><div className="card border rounded-3 h-100"><div className="card-body p-3">
                        <div className="d-flex justify-content-between mb-2"><h6 className="fw-bold mb-0">{title as string}</h6>{isDefault && <span className="badge bg-primary">Default</span>}</div>
                        <p className="text-muted mb-0" style={{ whiteSpace: "pre-line" }}>John Smith{"\n"}{addr as string}</p>
                        <div className="mt-3"><button className="btn btn-sm btn-outline-dark me-2">Edit</button><button className="btn btn-sm btn-outline-danger">Delete</button></div>
                      </div></div></div>
                    ))}
                  </div>
                  <button className="btn btn-outline-dark mt-3">Add New Address</button>
                </div></div>
              )}
              {tab === "details" && (
                <div className="card border-0 shadow-sm rounded-4"><div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Account Details</h5>
                  <form><div className="row g-3">
                    <div className="col-md-6"><label className="form-label">First Name</label><input type="text" className="form-control" defaultValue="John" /></div>
                    <div className="col-md-6"><label className="form-label">Last Name</label><input type="text" className="form-control" defaultValue="Smith" /></div>
                    <div className="col-12"><label className="form-label">Email</label><input type="email" className="form-control" defaultValue="john.smith@email.com" /></div>
                    <div className="col-12"><label className="form-label">Phone</label><input type="tel" className="form-control" defaultValue="+980-34984089" /></div>
                    <div className="col-12"><hr /><h6 className="fw-bold">Change Password</h6></div>
                    <div className="col-12"><label className="form-label">Current Password</label><input type="password" className="form-control" /></div>
                    <div className="col-md-6"><label className="form-label">New Password</label><input type="password" className="form-control" /></div>
                    <div className="col-md-6"><label className="form-label">Confirm Password</label><input type="password" className="form-control" /></div>
                    <div className="col-12"><button type="submit" className="btn btn-primary btn-lg">Save Changes</button></div>
                  </div></form>
                </div></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
