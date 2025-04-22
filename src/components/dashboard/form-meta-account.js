"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";

const MetaAccount = () => {

    const [formData, setFormData] = useState({
        
        address: "",
        phone: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        // TODO: Submit ke API atau handler sesuai kebutuhan
      };

  return (
    <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="address" className="mb-2">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your address"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  value={formData.phone}
                 onChange={handleChange}
                  placeholder="62000 0000 0000"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
  )
}

export default MetaAccount