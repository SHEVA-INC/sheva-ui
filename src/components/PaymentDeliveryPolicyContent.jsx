import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

const PaymentDeliveryPolicyContent = () => {
  return (
    <List component="ol">
      <ListItem>
        <ListItemText
          primary="Надсилаємо замовлення Новою Поштою в день замовлення, якщо замовлення
          надіслано до 17:00. Замовлення після 17:00 надсилаємо наступного дня.
          Відправки робимо щодня, окрім неділі."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Усі посилки зберігаються на відділенні 7 днів, після цього автоматично
          повертаються назад, якщо клієнт не встиг забрати посилку - ви
          оплачуєте послугу зворотної доставки."
        />
      </ListItem>

      <ListSubheader>
        <Typography
          sx={{ fontWeight: "bolder" }}
          color="secondary.main"
          variant="h6"
        >
          Способи оплати
        </Typography>
      </ListSubheader>

      <List component="ol" disablePadding sx={{ paddingLeft: 4 }}>
        <ListItem>
          <ListItemText primary="Післяплата (Мінімальна передоплата 100 грн)" />
        </ListItem>
        <ListItem sx={{ display: "block" }}>
          <ListItemText primary="Оплата на рахунок:" />
          <ListItemText primary="IBAN UA963220010000026001330121534" />
          <ListItemText primary="ЄДРПОУ: 3424207791" />
          <ListItemText primary="Одержувач: ФОП Горобчук Сергій Сергійович" />
          <ListItemText primary="Платіжна система LiqPay" />
        </ListItem>
      </List>
    </List>
  );
};

export default PaymentDeliveryPolicyContent;
