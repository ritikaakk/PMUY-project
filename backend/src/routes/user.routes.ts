import { Router } from 'express';
import User from '../models/user.model';

const router = Router();

// Utility: Calculate subsidy based on income
const calculateSubsidy = (income: number): number => {
  if (income === 0) return 50;
  if (income <= 25000) return 40;
  if (income <= 50000) return 30;
  if (income <= 75000) return 20;
  if (income <= 100000) return 10;
  return 0;
};

// ✅ Apply for LPG connection
router.post('/apply', async (req, res) => {
  try {
    const { name, aadhar, address, income, phone, email } = req.body;

    if (!name || !aadhar || !address || !income || !phone || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const subsidyAmount = calculateSubsidy(income);
    const user = new User({
      name,
      aadhar,
      address,
      income,
      phone,
      email,
      status: 'Pending',
      subsidyAmount
    });

    await user.save();
    res.json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error });
  }
});

// ✅ Check Status by Aadhar
router.get('/status/:aadhar', async (req, res) => {
  try {
    const user = await User.findOne({ aadhar: req.params.aadhar });
    if (!user) return res.status(404).json({ message: 'Application not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching status' });
  }
});

// ✅ Get All Applications (Admin)
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

// ✅ Update Status (Approve/Reject)
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updateData: any = { status };

    if (status === 'Approved') {
      updateData.officerName = 'Officer Rajesh Kumar';
      updateData.connectionDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(); // +7 days
    } else if (status === 'Rejected') {
      updateData.rejectionReason = 'Eligibility criteria not met';
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Status updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating status' });
  }
});

export default router;
