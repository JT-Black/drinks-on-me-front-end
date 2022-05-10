import React from 'react';

const Transfers = () => {
  return (
    <section className='reg'>
      <div class='nes-table-responsive'>
        <table class='nes-table is-bordered is-centered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>User</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/05/22</td>
              <td>£24</td>
              <td>John Brown</td>
              <td>Drinks on me bro</td>
            </tr>
            <tr>
              <td>10/05/22</td>
              <td>£16</td>
              <td>Queen Liz</td>
              <td>Call me!</td>
            </tr>
            <tr>
              <td>10/05/22</td>
              <td>£15</td>
              <td>Peter Griffin</td>
              <td>Roadhouse!</td>
            </tr>
            <tr>
              <td>10/05/22</td>
              <td>£14</td>
              <td>Poke Girl</td>
              <td>Call me!</td>
            </tr>
            <tr>
              <td>10/05/22</td>
              <td>£26</td>
              <td>Mary Green</td>
              <td>Enjoy!</td>
            </tr>
            <tr>
              <td>10/05/22</td>
              <td>£5</td>
              <td>John Brown</td>
              <td>Call me!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transfers;
